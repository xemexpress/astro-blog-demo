<script lang="ts">
    import type { ReactionDetails } from "../types/Emoji";
    import { emojiList } from "../types/Emoji";

    import EmojiReaction from "./EmojiReaction.svelte";

    export let post: string;
    export let details: ReactionDetails;
</script>

<div class=" flex gap-x-2 justify-center items-center h-8">
    {#each emojiList as emoji}
        <EmojiReaction
            {emoji}
            {post}
            reacted={details[emoji]?.reacted ?? false}
            count={details[emoji]?.count ?? 0}
        />
    {/each}
</div>
