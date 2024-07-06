export enum Emoji {
    thumbsup = "thumbsup",
    star = "star",
    heart = "heart",
    rocket = "rocket",
}

// Define the structure of our processed reactions
interface ReactionDetail {
    count: number;
    reacted: boolean;
}

// Define the structure of our final processed reactions object
export interface ReactionDetails {
    [Emoji.thumbsup]: ReactionDetail;
    [Emoji.heart]: ReactionDetail;
    [Emoji.rocket]: ReactionDetail;
    [Emoji.star]: ReactionDetail;
}

export const emojiList = Object.values(Emoji);
