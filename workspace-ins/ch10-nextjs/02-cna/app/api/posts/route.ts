// GET /api/posts
export async function GET(){
  const res = await fetch(`https://fesp-api.koyeb.app/market/posts`, {
    headers: {
      'Client-Id': 'openmarket'
    }
  });
  const data = await res.json();
  return Response.json(data);
}