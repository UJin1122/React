import type { ResData, TodoInfoRes, TodoListRes } from "@/types/todo";

const API_SERVER = 'https://fesp-api.koyeb.app/todo';

// 할일 목록 조회
export async function getTodoList(): Promise<TodoListRes> {
  const res = await fetch(`${API_SERVER}/todolist`);
  const data = await res.json();

  if(!res.ok){
    // 서버의 응답 상태 코드가 4xx, 5xx일 경우
    throw new Response(data.message, { status: res.status });
  }
  return data;
}

// 할일 상세 조회
export async function getTodoInfo(_id: string) {
  const res = await fetch(`${API_SERVER}/todolist/${_id}`);
  const data = await res.json();

  if(!res.ok){
    // 서버의 응답 상태 코드가 4xx, 5xx일 경우
    throw new Response(data.message, { status: res.status });
  }
  return data;
}

// 할일 수정
export async function updateTodo(_id: string, formData: FormData) {
  const body={
    title:formData.get('title'),
    content:formData.get('content'),
    done:formData.get('done') === 'on',
  };
  const res = await fetch(`${API_SERVER}/todolist/${_id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();

  if(!res.ok){
    throw new Response(data.message, { status: res.status });
  }
  return data;
}


// 할일 추가
export async function addTodo(formData: FormData):Promise<ResData<TodoInfoRes>> {
  const body={
    title:formData.get('title'),
    content:formData.get('content'),
  };
  const res = await fetch(`${API_SERVER}/todolist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // 브라우저가 보내는 바디 데이터의 타입을 지정
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();

  if(!res.ok){
    throw new Response(data.message, { status: res.status });
  }
  return data;
}

// 할일 삭제
export async function deleteTodo(_id: string) {
  const res = await fetch(`${API_SERVER}/todolist/${_id}`, {
    method: 'DELETE',
  });
  const data = await res.json();

  if(!res.ok){
    throw new Response(data.message, { status: res.status });
  }
  return data;
}