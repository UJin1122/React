import { getPosts } from "@/lib/post";

// GET /api/posts
export async function GET(){
  const data = getPosts();
  return Response.json(data);
}