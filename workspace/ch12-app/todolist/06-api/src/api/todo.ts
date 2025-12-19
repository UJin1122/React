import type { TodoListRes } from "@/types/todo";

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
