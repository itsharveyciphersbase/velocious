// @ts-nocheck
import type { Load } from '@sveltejs/kit';
export const load = async ({ params, fetch }: Parameters<Load>[0]) => {

    // Now, we'll fetch the blog post from Strapi
    const res = await fetch(`http://localhost:1337/api/posts/${params.id}?populate=*`);
    // A 404 status means "NOT FOUND"
    if (res.status === 404) {
        // We can create a custom error and return it.
        // SvelteKit will automatically show us an error page that we'll learn to customise later on.
        const error = new Error(`The post with ID ${params.id} was not found`);
        return { status: 404, error };
    } else {
        const response = await res.json();
        console.log(response.data.attributes.image);
        return { props: { post: response.data.attributes } };
    }
};