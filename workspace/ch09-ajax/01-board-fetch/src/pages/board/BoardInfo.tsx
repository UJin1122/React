import { useEffect, useState } from "react";
import { _id, url, type Post } from "@/types/board";

function BoardInfo() {
  const [data, setData] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

      if (!response.ok) {
        throw new Error("게시물 정보를 불러오지 못함.");
      }

      const result = await response.json();
      setData(result.item);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestInfo();
  }, []);

 
  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
    </>
  );

  // 삼항 연산자 방식
  // return (
  //   <>
  //     {isLoading ? (<p>로딩 중...</p>) : error 
  //     ? (<p>{error}</p>) : !data 
  //     ? null : 
  //     (
  //       <>
  //         <h2>{data.title}</h2>
  //         <p>{data.content}</p>
  //       </>
  //     )
  //     }
  //   </>
  // );
}

export default BoardInfo;
