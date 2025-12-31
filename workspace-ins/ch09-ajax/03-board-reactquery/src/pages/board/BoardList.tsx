import BoardInfo from "@/pages/board/BoardInfo";
import { useState } from "react";

function BoardList(){
  // TODO 1: 게시물 목록 조회

  // TODO 2: 게시물 클릭 시 상세정보 업데이트(postId를 클릭한 게시물 id로 지정)
  const [postId, setPostId] = useState(null);

  return (
    <>
      <h1>게시물 목록</h1>
      <ul>
        <li>1번 어쩌고 저쩌고</li>
        <li>2번 이랬고 저랬고</li>
      </ul>
      <BoardInfo postId={4}/>
    </>
  );
}

export default BoardList;