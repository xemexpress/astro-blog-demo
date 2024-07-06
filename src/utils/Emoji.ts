import {
    Emoji,
    emojiList,
    type ReactionDetails as ReactionDetails,
} from "../types/Emoji";
import { XataClient } from "../xata";

export const getReactionCountsByPost = async (post: string) => {
    const xata = new XataClient({ apiKey: import.meta.env.XATA_API_KEY });

    const emojiReactions = await xata.db.reactions
        .select(["emoji", "user.id"])
        .filter({ post: post })
        .getMany();

    const aggregateConfig = emojiList.reduce((acc: any, emoji) => {
        acc[emoji] = {
            count: {
                filter: { emoji, post },
            },
        };
        return acc;
    }, {});

    const { aggs } = await xata.db.reactions.aggregate(aggregateConfig);

    return aggs;
};

export const getReactionDetailsByPost = async (
    post: string,
    userId?: string
) => {
    const xata = new XataClient({ apiKey: import.meta.env.XATA_API_KEY });

    const reactionCounts = await getReactionCountsByPost(post);
    const reactionsByUser = await xata.db.reactions
        .filter({ post, "user.id": userId ?? "" })
        .getMany();

    const reactionsDetails = emojiList.reduce(
        (acc: ReactionDetails, emoji: Emoji) => {
            acc[emoji] = {
                count: reactionCounts[emoji],
                reacted: reactionsByUser.some(
                    (reaction) => reaction.emoji === emoji
                ),
            };

            return acc;
        },
        {
            [Emoji.thumbsup]: {
                count: 0,
                reacted: false,
            },
            [Emoji.star]: {
                count: 0,
                reacted: false,
            },
            [Emoji.heart]: {
                count: 0,
                reacted: false,
            },
            [Emoji.rocket]: {
                count: 0,
                reacted: false,
            },
        }
    );

    return reactionsDetails;

    // const emojiReactions = await xata.db.reactions
    //     .select(["emoji", "user.id"])
    //     .filter({ post: post })
    //     .getMany();

    // const reactionsCount: ReactionDetails = emojiReactions.reduce(
    //     (acc: ReactionDetails, reaction) => {
    //         const { emoji, user } = reaction;

    //         if (!acc[emoji]) {
    //             acc[emoji] = {
    //                 count: 0,
    //                 reacted: false,
    //             };
    //         }

    //         acc[emoji].count += 1;

    //         return acc;
    //     },
    //     {}
    // );

    // return reactionsCount;
};
