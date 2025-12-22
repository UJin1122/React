import type { ResData, TodoInfoRes, TodoListRes } from "@/types/todo";
import dayjs from "dayjs";

const API_SERVER = 'https://fesp-api.koyeb.app/todo';

// 할일 목록 조회
export async function getTodoList({ page='1', limit='10', keyword='' }
  : { page:string, limit:string, keyword:string}): Promise<TodoListRes> {
  const query = new URLSearchParams({ page, limit, keyword })
  const res = await fetch(`${API_SERVER}/todolist?${query.toString()}`);
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
  const finishAt = formData.get('finishAt');
  if(finishAt){
    const formatFinishAt = dayjs(finishAt as string).format('YYYY.MM.DD HH:mm:ss');
    formData.set('finishAt', formatFinishAt);
  }else{
    formData.delete('finishAt');
  }

  const bodyRow = Object.fromEntries(formData.entries());
  const body = {
    ...bodyRow,
    done: bodyRow.done === 'on',
    important: bodyRow.important === 'on',
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
  // const body={
  //   title:formData.get('title'),
  //   content:formData.get('content'),
  // };
  const finishAt = formData.get('finishAt');
  if(finishAt){
    const formatFinishAt = dayjs(finishAt as string).format('YYYY.MM.DD HH:mm:ss');
    formData.set('finishAt',formatFinishAt);
  }else{
    formData.delete('finishAt');
  }

  const bodyRow = Object.fromEntries(formData.entries());
  const body = {
    ...bodyRow,
    important: bodyRow.important === 'on',
  }

 
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