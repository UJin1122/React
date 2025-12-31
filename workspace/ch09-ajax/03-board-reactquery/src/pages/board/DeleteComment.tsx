import { getAxios } from "@/pages/utils/axiosInstance";
import { useState } from "react";

interface DeleteCommentProps {
  postId: number;
  commentId: number;
  onDelete: () => void;
}

function DeleteComment({ postId, commentId, onDelete }: DeleteCommentProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDelete = async () => {
    if (!confirm('댓글을 삭제하시겠습니까?')) {
      return;
    }

    setIsLoading(true);
    try {
      const axios = getAxios();
      // DELETE /posts/{postId}/replies/{reply_id}
      console.log('삭제 요청:', `/posts/${postId}/replies/${commentId}`);
      const response = await axios.delete(`/posts/${postId}/replies/${commentId}`);
      console.log('댓글 삭제 성공:', response);
      onDelete(); // 삭제 후 목록 새로고침
    } catch (err: unknown) {
      console.error('댓글 삭제 실패:', err);
      // axios 에러 상세 정보 출력
      if (err && typeof err === 'object' && 'response' in err) {
        const axiosErr = err as { response?: { data?: unknown; status?: number } };
        console.error('에러 응답:', axiosErr.response?.data);
        console.error('상태 코드:', axiosErr.response?.status);
      }
      alert('댓글 삭제에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={isLoading}
      className="delete-btn"
    >
      {isLoading ? '삭제 중...' : '삭제'}
    </button>
  );
}

export default DeleteComment;