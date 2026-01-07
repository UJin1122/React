// API 서버와 통신 작업
// 클라이언트 컴포넌트 전용

export async function createPost(formData: FormData): Promise<void>{
  const title = formData.get('title');
  const content = formData.get('content');
  const res = await fetch(`https://fesp-api.koyeb.app/market/posts`,{
    method: 'POST',
    body: JSON.stringify({ title, content }),
    headers:{
      'client-id': 'openmarket',
      'Content-Type': 'application/json'
    }
  });
  const data = await res.json();
  return data.item;
}