import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
 

export const GET: RequestHandler = async () => {
  const res = await fetch('http://localhost:1337/api/posts?populate=*');
  const response = await res.json();
  return new Response(JSON.stringify(response));
}