// @ts-nocheck
import type { PageLoad } from './$types';

export const load = async ({ fetch }: Parameters<PageLoad>[0]) => {
    const res = await fetch('/posts');
    const response = await res.json();
    //console.log(response.data);
    return { props: { posts: response.data } };
};