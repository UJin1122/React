import { getTodoInfo, getTodoList } from "@/api/todo";
import { type LoaderFunctionArgs } from "react-router";

export async function todoListLoader({ request }:LoaderFunctionArgs) {
  console.log(request.url);
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const page = searchParams.get('page') || '1';
  const limit = searchParams.get('limit') || '10';
  const keyword = searchParams.get('keyword') || '';

  try {
    return getTodoList({ page, limit, keyword });
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
    throw new Error('일시적인 네트워크 오류. 잠시 후 다시 시도하세요.');
  }
}