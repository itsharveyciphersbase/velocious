<script lang="ts">
	import { goto } from '$app/navigation';
    import type { PageData } from './$types';
  
    export let data: PageData;
</script>

{#each data.props.posts as post}
<div
    class="hover:bg-gray-200 cursor-pointer px-6 py-2 border-b border-gray-500"
    on:click={() => goto('/blog/' + post.id)}
>
    <h4 class="font-bold">{post.attributes.Title}</h4>
    <p class="mt-2 text-gray-800">{post.attributes.Description}</p>
    <!-- <img class=""alt="" src="http://localhost:1337{post.attributes.image.data.attributes.formats.small.url}"/> -->

    <!-- <p class="text-gray-500">By: {post.attributes.author.data.attributes.username}</p> -->
</div>
{/each}