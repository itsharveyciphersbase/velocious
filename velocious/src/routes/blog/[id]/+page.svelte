<!-- src/routes/blog/[id].svelte -->
<script lang="ts">
    import type { Post } from '$lib/types';
	import type { PageData } from './$types';
    import { onMount } from 'svelte';
    export let data: PageData;
    export let post: Post;
    let content = data.props?.post.Content;
    console.log(data);
    onMount(async () => {
        // Install the marked package first!
        // Run this command: npm i marked
        // We're using this style of importing because "marked" uses require, which won't work when we import it with SvelteKit.
        // Check the "How do I use a client-side only library" in the FAQ: https://kit.svelte.dev/faq
        const marked = (await import('marked')).default;
        content = marked(post.Content);
    });
</script>
<h1 class="text-center text-4xl mt-4">{data.props?.post.Title}</h1>
<img class=""alt="" src="http://localhost:1337{data.props?.post.image.data.attributes.formats.small.url}"/>
<h2 class="text-center mt-4">{data.props?.post.Description}</h2>
<p class="text-center mt-2">By: {data.props?.post.author?.data.attributes.username}</p>
<div class="border border-gray-500 my-4 mx-8 p-6 rounded">
    {@html content}
</div>
<style>
img {
    align-self: center;
    max-width: 50%;
    height: auto;
  }
</style>