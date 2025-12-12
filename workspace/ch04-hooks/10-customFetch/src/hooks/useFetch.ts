import type { ErrorRes, ResData, TodoListRes } from "@/types/todo";
import { useEffect, useState } from "react";

const API_SERVER = 'https://fesp-api.koyeb.app/todo';

interface FetchParams{
  url: string;
  method?: string;
}

function useFetch(fetchParams: FetchParams){

// Todo 목록을 저장할 상태 (초기값: null)
const [ data, setData ] = useState<TodoListRes | null>(null);

// 에러 메세지를 저장할 상태 (초기값: null)
const [ error, setError ] = useState<ErrorRes | null>(null);

// 로딩 상태를 저장 (초기값: true)
const [ loading, setLoading ] = useState(true);

const requestFetch = async (url) => {
  try {
    setLoading(true);

    const res = await fetch(API_SERVER + url);
    console.log('res', res);

    const jsonRes: ResData = await res.json();
    console.log('body', jsonRes);
    
    if(jsonRes.ok === 1){ // 타입 가드
    setData(jsonRes);
    setError(null);
    }else{ 
      // API 서버에서 에러를 응답받을 경우
      throw new Error(jsonRes.message);
    }
    
  }catch (error) {
    // 네트워크 오류, API서버 오류
    setError(error as ErrorRes);
    setData(null);
  }finally{
    // 성공, 실패 여부와 상관없이 로딩 상태를 false로 설정
    setLoading(false);
  }
};

// 컴포넌트가 마운트 된 후에 실행
useEffect(()=>{
  requestFetch(fetchParams);
},[]);

return { data, error, loading};

}
export default useFetch;