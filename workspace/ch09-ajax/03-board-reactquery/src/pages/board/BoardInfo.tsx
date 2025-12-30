import { useEffect, useState } from "react";
import { _id, type BoardInfo as BoardInfoType, type BoardInfoRes } from "@/types/board";
import CommentList from "@/pages/board/CommentList";
import { getAxios } from "@/pages/utils/axiosInstance";

const axiosInstance = getAxios();

function BoardInfo() {
  const [data, setData] = useState<BoardInfoType | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  
  const requestInfo = async () => {
    try {
      setIsLoading(true);
      
      const response = await axiosInstance.get<BoardInfoRes>(`/posts/${_id}`);
      console.log('response', response);
      console.log('jsonBody', response.data.item);

      setData(response.data.item);
      setError(null);
    } catch (err) {
      setError(err as Error);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestInfo();
  }, []);

  return (
    <>

    { isLoading && <><h2>로딩중...</h2><p>잠시만 기다려주세요...</p></>}
    { error && <><h2>에러 발생</h2><p>{ error.message }</p></>}

    { data && <>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
      </>
    }
    <CommentList/>
    </>
  );

}

export default BoardInfo;
