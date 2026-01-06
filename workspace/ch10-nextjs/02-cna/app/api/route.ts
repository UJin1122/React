// GET http://localhost:3000/api

let savedData: Record<string, string> = { hello: 'world' };

// 불러오기
export async function GET(request: Request){
  console.log('요청 정보',request);
  // return Response.json({hello: 'world'});
  return Response.json(savedData);
}


// 추가
export async function POST(request: Request){
  const body = await request.json();
  console.log('POST 요청', body);
  savedData = { ...savedData, ...body };  // 데이터 저장
  return Response.json({ received: body });
}

// 수정
export async function PUT(request: Request){
  const body = await request.json();
  const { key, value } = body;  // 수정할 키와 값

  if (key && savedData[key] !== undefined) {
    savedData[key] = value;
    return Response.json({ updated: key, data: savedData });
  }

  return Response.json({ error: '해당 키가 없습니다' }, { status: 404 });
}

// 삭제
export async function DELETE(request: Request){
  const body = await request.json();
  const keyToDelete = body.key;  // 삭제할 키

  if (keyToDelete && savedData[keyToDelete]) {
    delete savedData[keyToDelete];
    return Response.json({ deleted: keyToDelete, data: savedData });
  }

  return Response.json({ error: '해당 키가 없습니다' }, { status: 404 });
}