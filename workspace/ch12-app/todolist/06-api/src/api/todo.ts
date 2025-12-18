import type { TodoListRes } from "@/types/todo";

const API_SERVER = 'https://fesp-api.koyeb.app/todo';

export async function getTodoList(): Promise<TodoListRes> {
  const res = await fetch(`${API_SERVER}/todolist`);
  const data = await res.json();

  if(!res.ok){
    // 서버의 응답 상태 코드가 4xx, 5xx일 경우
    throw new Response(data.message,{ status: res.status });
  }
  return data;
}


export async function getTodoInfo() {
  
}
