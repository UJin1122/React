import { useEffect, useState } from "react";
import { _id, type BoardReply, type BoardReplyListRes } from "@/types/board";
import CommentNew from "@/pages/board/CommentNew";
import DeleteComment from "@/pages/board/DeleteComment";
import "@/pages/style/CommentList.css";
import { getAxios } from "@/pages/utils/axiosInstance";

const ITEMS_PER_PAGE = 5;
const PAGES_PER_GROUP = 5;
const axiosInstance = getAxios();

function CommentList() {
  const [data, setData] = useState<BoardReply[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  

  const requestInfo = async () => {
    try{
      const response = await axiosInstance.get<BoardReplyListRes>(`/posts/${_id}/replies`);
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

  // 댓글을 역순으로 정렬
  const reversedComments = data ? [...data].reverse() : [];

  // 총 페이지 수 계산
  const totalPages = Math.ceil(reversedComments.length / ITEMS_PER_PAGE);

  // 현재 페이지에 해당하는 댓글만 추출
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentComments = reversedComments.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // 현재 페이지 그룹 계산 (1~5, 6~10, 11~15 ...)
  const currentGroup = Math.ceil(currentPage / PAGES_PER_GROUP);
  const groupStartPage = (currentGroup - 1) * PAGES_PER_GROUP + 1;
  const groupEndPage = Math.min(currentGroup * PAGES_PER_GROUP, totalPages);
  const pageNumbers = Array.from(
    { length: groupEndPage - groupStartPage + 1 },
    (_, i) => groupStartPage + i
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 이전/다음 그룹으로 이동
  const handlePrevGroup = () => {
    setCurrentPage(groupStartPage - PAGES_PER_GROUP);
  };

  const handleNextGroup = () => {
    setCurrentPage(groupStartPage + PAGES_PER_GROUP);
  };

  return (
    <>
    <CommentNew reload={requestInfo}/>
      <h3>댓글 목록</h3>

      { isLoading && <p>댓글 로딩중...</p>}
      { error && <p>에러: { error.message }</p>}

      <ul className="comment-list">
        {currentComments.map((comment) => (
          <li key={comment._id}>
            {comment.user.name} : {comment.content}
            <DeleteComment commentId={comment._id} onDelete={requestInfo} />
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={handlePrevGroup}
            disabled={currentGroup === 1}
            className="pagination-btn"
          >
            이전
          </button>

          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`page-btn ${currentPage === page ? "active" : ""}`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={handleNextGroup}
            disabled={groupEndPage === totalPages}
            className="pagination-btn"
          >
            다음
          </button>
        </div>
      )}
    </>
  );
}

export default CommentList;
