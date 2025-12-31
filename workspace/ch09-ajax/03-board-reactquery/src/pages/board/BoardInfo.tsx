import { type BoardInfoRes } from "@/types/board";
import CommentList from "@/pages/board/CommentList";
import { getAxios } from "@/pages/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const axiosInstance = getAxios();

function BoardInfo({ postId }: { postId: number }) {

  const {data, isLoading, error} = useQuery({
    queryKey: ['post', postId],
    queryFn: () => axiosInstance.get<BoardInfoRes>(`/posts/${postId}`),
    select: (response) => response.data.item,
  });
  

  return (
    <>

    { isLoading && <><h2>로딩중...</h2><p>잠시만 기다려주세요...</p></>}
    { error && <><h2>에러 발생</h2><p>{ error.message }</p></>}

    { data && <>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
      </>
    }
    <CommentList postId={postId}/>
    </>
  );

}

export default BoardInfo;
