import { getTodoInfo, getTodoList } from "@/api/todo";
import { type LoaderFunctionArgs } from "react-router";

export async function todoListLoader({ request }:LoaderFunctionArgs) {
  console.log(request.url);
  try {
    return getTodoList();
  } catch (error) {
    if(error instanceof Response) throw error;
    throw new Error('일시적인 네트워크 오류. 잠시후 다시 시도하세요.');
  }
}

export async function TodoInfoLoader({ params }:LoaderFunctionArgs) {

  try {
    return getTodoInfo( params._id! );
  } catch (error) {
    if(error instanceof Response) throw error;
    throw new Error('일시적인 네트워크 오류. 잠시후 다시 시도하세요.');
  }
}