import { useEffect, useState } from "react";
import { _id, url, type Comment } from "@/types/board";
import CommentNew from "@/pages/board/CommentNew";

const ITEMS_PER_PAGE = 5;
const PAGES_PER_GROUP = 5;

function CommentList() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

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
        throw new Error("댓글을 불러오지 못함.");
      }

      const result = await response.json();
      setComments(result.item.replies);
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

  if (!comments) {
    return null;
  }

  // 댓글을 역순으로 정렬
  const reversedComments = [...comments].reverse();

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
    <CommentNew/>
      <h3>댓글 목록</h3>
      <ul>
        {currentComments.map((comment) => (
          <li key={comment._id}>
            {comment.user.name} : {comment.content}
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
          <button 
          onClick={handlePrevGroup} 
          disabled={currentGroup === 1}
          style={{ border:"none", cursor: "pointer",}}>
            이전
          </button>

          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              style={{
                fontWeight: currentPage === page ? "bold" : "normal",
                backgroundColor: currentPage === page ? "#333333" : "transparent",
                color: currentPage === page ? "#fff" : "#000",
                border: "none",
                cursor: "pointer",
                width: "28px",
                height: "28px",
                borderRadius: "50%",                
              }}
            >
              {page}
            </button>
          ))}

          <button
            onClick={handleNextGroup}
            disabled={groupEndPage === totalPages}
            style={{ border:"none", cursor: "pointer",}}>
            다음
          </button>
          
        </div>
        
      )}
    </>
  );
}

export default CommentList;
