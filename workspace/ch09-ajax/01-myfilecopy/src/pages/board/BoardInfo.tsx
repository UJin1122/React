import { useEffect, useState } from "react";
import { _id, url, type BoardInfo, type BoardInfoRes, type ResData } from "@/types/board";
import CommentList from "@/pages/board/CommentList";

function BoardInfo() {
  const [data, setData] = useState<BoardInfo | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const requestInfo = async () => {
    try {
      const response = await fetch(
        `${url}/posts/${_id}`,
        {
          method: "GET",
          headers: {
            "client-id": "openmarket",
          },
        }
      );
      console.log('response', response);
      const jsonBody: ResData<BoardInfoRes> = await response.json();
      console.log('jsonBody', (jsonBody as BoardInfoRes).item);

      if(jsonBody.ok){
        // 서버의 응답 상태코드가 2xx(ok:1 성공)일 때는 밑의 내용 표시
        setData(jsonBody.item);
        setError(null);
      }else{ 
        // 서버의 응답 상태코드가 4xx, 5xx(ok:0 실패)일 때는 밑의 내용 표시
        // const err = new Error(jsonBody.message) 
        // setError(err);
        // setData(null);
        throw new Error(jsonBody.message);
      }
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
