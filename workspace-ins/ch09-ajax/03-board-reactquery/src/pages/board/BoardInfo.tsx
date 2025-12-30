import CommentList from "@/pages/board/CommentList";
import type { BoardInfoRes } from "@/types/board";
import { getAxiosInstance } from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const axiosInstance = getAxiosInstance();

function BoardInfo() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts', '3'],
    queryFn: () => axiosInstance.get<BoardInfoRes>('/posts/3'),
    select: (response) => response.data.item,
  });

  return (
    <>
      { isLoading && <><h2>로딩중...</h2><p>잠시만 기다려 주세요</p></> }
      { error && <><h2>에러 발생!!!</h2><p>{ error.message }</p></> }

      { data && <>
        <h2>{ data._id } 번 게시물: { data.title }</h2>
        <p>{ data.content }</p>
      </> }      
      <CommentList />
    </>
  );
}

export default BoardInfo;