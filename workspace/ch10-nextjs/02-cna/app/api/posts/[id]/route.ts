// 상세 조회
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
){
  const { id } = await params;

  const res = await fetch(`https://fesp-api.koyeb.app/market/posts/${id}`,{
    headers:{
      'client-id': 'openmarket'
    }
  });
  const data = await res.json();
  return Response.json(data);
}
