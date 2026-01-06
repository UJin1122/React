// GET http://localhost:3000/api
export async function GET(request: Request) {
  console.log('요청 정보', request);
  return Response.json({ hello: 'world' });
}