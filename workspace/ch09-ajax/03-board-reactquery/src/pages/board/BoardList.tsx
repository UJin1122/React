import "@/pages/style/BoardList.css";
import { getAxios } from "@/pages/utils/axiosInstance";
import { type BoardListRes } from "@/types/board";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import BoardInfo from "./BoardInfo";

const axiosInstance = getAxios();

function BoardList() {
  const [postId, setPostId] = useState<number | null>(null);

  const {data, isLoading, error} = useQuery({
    queryKey: ['posts'],
    queryFn: () => axiosInstance.get<BoardListRes>(`/posts`),
    select: (response) => response.data.item,
  });

  const list = data?.map((post) => (
            <li key={post._id}
            onClick={()=> setPostId(post._id)}>
              {post.title}             
            </li>
          ));

  return (
    <>
      <h2>게시글 목록</h2>

      { isLoading && <p>로딩중...</p>}
      { error && <p>에러 발생: { error.message }</p>}

      { data && (<ul className="board-list">{ list }</ul>)}

      {postId && <BoardInfo postId={ postId  } />}
    </>
  );

}

export default BoardList;