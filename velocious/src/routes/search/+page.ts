import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    const res = await fetch('/posts');
    const response = await res.json();
    //console.log(response.data);
    return { props: { posts: response.data } };
};