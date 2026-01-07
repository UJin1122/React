// GET http://localhost:3000/api
export async function GET(request: Request) {
  console.log('요청 정보', request);
  return Response.json({ hello: '이 메시지가 보이나요???' });
}