import type { ErrorRes, ResData, TodoInfoRes, TodoListRes } from "@/types/todo";
import axios from "axios";
import { useEffect, useState } from "react";

const API_SERVER = 'https://fesp-api.koyeb.app/todo';
axios.defaults.baseURL = API_SERVER;
axios.defaults.timeout = 5000;

interface FetchParams {
  url: string;
  method?: 'GET' | 'POST';
}

function useAxios<T extends TodoListRes | TodoInfoRes>(fetchParams: FetchParams) {
  // Todo 목록을 저장할 상태 (초기값: null)
  const [ data, setData ] = useState<T | null>(null);

  // 에러 메시지를 저장할 상태 (초기값: null)
  const [ error, setError ] = useState<ErrorRes | null>(null);

  // 로딩 상태를 저장 (초기값: true)
  const [ loading, setLoading ] = useState(true);

  const requestFetch = async (params: FetchParams) => {
    try{
      // 로딩중 상태 표시
      setLoading(true);

      const res = await axios.get(params.url);
      console.log('res', res);

      const jsonRes: ResData<T> = res.data;
      console.log('body', jsonRes);

      if(jsonRes.ok === 1){ // 타입 가드
        setData(jsonRes);
        setError(null);
      }
    }catch(err){
      // 네트워크 오류 같은 에러 발생 시
      setError(err as ErrorRes);
      setData(null);
    }finally{
      // 성공, 실패 여부와 관계없이 로딩 상태를 false로 설정
      setLoading(false);
    }
  };

  // 컴포넌트가 마운트 된 후에 실행
  useEffect(() => {
    requestFetch(fetchParams);
  }, []); // 빈 배열을 전달해서 마운트시 한번만 호출되도록 설정

  return { data, error, loading };
}

export default useAxios;