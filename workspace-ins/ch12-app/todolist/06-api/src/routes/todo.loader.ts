import { getTodoInfo, getTodoList } from "@/api/todo";
import type { LoaderFunctionArgs } from "react-router";

// react-router의 loader에서 사용할 목록 조회 함수
export async function todoListLoader({ request }: LoaderFunctionArgs) {
  console.log(request.url);
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const page = searchParams.get('page') || '1';
  const limit = searchParams.get('limit') || '10';
  const keyword = searchParams.get('keyword') || '';
  try{
    return getTodoList({ page, limit, keyword });
  }catch(err){
    if (err instanceof Response) throw err; // errorElement에서 처리할 4xx, 5xx 에러
    throw new Error('일시적인 네트워크 문제가 발생했습니다. 잠시후 다시 시도하세요.');
  }
}

// react-router의 loader에서 사용할 상세 조회 함수
export async function todoInfoLoader({ params }: LoaderFunctionArgs) {
  try{
    return getTodoInfo(params._id!);
  }catch(err){
    if (err instanceof Response) throw err; // errorElement에서 처리할 4xx, 5xx 에러
    throw new Error('일시적인 네트워크 문제가 발생했습니다. 잠시후 다시 시도하세요.');
  }
}

