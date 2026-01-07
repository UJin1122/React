import { getPosts } from "@/lib/post";

// 목록 조회
export async function GET(){
  const data = await getPosts();
  return Response.json(data);
}

// 게시글 추가
export async function POST(request: Request){
  const body = await request.json();

  const res = await fetch(`https://fesp-api.koyeb.app/market/posts`,{
    method: 'POST',
    headers:{
      'client-id': 'openmarket',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  const data = await res.json();
  return Response.json(data);
}