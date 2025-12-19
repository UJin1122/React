import { addTodo, deleteTodo, updateTodo } from "@/api/todo";
import { redirect, type ActionFunctionArgs } from "react-router";

// react-router의 action에서 사용할 등록 함수
export async function TodoAddAction({ request }:ActionFunctionArgs) {
  try {
    const formData = await request.formData();
    await addTodo( formData );
    return redirect(`/todo/list`);
  } catch (error) {
    if(error instanceof Response) throw error;  // errorElement 에서 처리
    throw new Error('일시적인 네트워크 오류. 잠시 후 다시 시도하세요.');
  }
}

// react-router의 action에서 사용할 수정 함수
export async function TodoUpdateAction({ request, params }:ActionFunctionArgs) {
  try {
    const formData = await request.formData();
    // 동적 세그먼트로 지정한 _id 추출
    // path = todo/list/:_id/edit 
    // url에서 _id = 3일때 params = { _id: 3 }
    await updateTodo( params._id!, formData );
    return redirect(`/todo/list/${params._id}`);
  } catch (error) {
    if(error instanceof Response) throw error;  // errorElement 에서 처리
    throw new Error('일시적인 네트워크 오류. 잠시 후 다시 시도하세요.');
  }
}

export async function TodoDeleteAction({ params }:ActionFunctionArgs) {
  try {
    await deleteTodo( params._id! );
    return redirect('/todo/list');
  } catch (error) {
    if(error instanceof Response) throw error;  // errorElement 에서 처리
    throw new Error('일시적인 네트워크 오류. 잠시 후 다시 시도하세요.');
  }
}