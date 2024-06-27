<script lang="ts">
    import kwesforms from "kwesforms";
    import { onMount } from "svelte";

    onMount(() => {
        kwesforms.init();
    });
</script>

<form
    class="kwes-form grid gap-y-2"
    action="https://kwesforms.com/api/f/mcMBAa8HLEE9G0rXYHe5"
>
    <label class=" text-zinc-900 text-2xl mb-2 mt-10">
        What's on your mind?
    </label>

    <textarea
        class="border border-teal-900 rounded-lg text-2xl p-6"
        name="comment"
        id="comment"
        rows="3"
        rules="required|max:255"
    />

    <button
        type="submit"
        class=" text-2xl text-zinc-100 bg-teal-900 px-6 py-5 rounded-xl my-1"
    >
        Send
    </button>
</form>
