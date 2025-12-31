import "@/pages/style/CommentNew.css";
import { getAxios } from "@/pages/utils/axiosInstance";
import { type BoardReplyCreateRes } from "@/types/board";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const axiosInstance = getAxios();

function CommentNew({ postId }: { postId: number }) {
  const queryClient = useQueryClient();

  const { mutate: requestAddComment, isPending, error } = useMutation({
    mutationFn: (formData: FormData) => axiosInstance.post<BoardReplyCreateRes>(`/posts/${ postId }/replies`, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['post', `${ postId }`, 'replies'] });
    },
  });

  // 등록 버튼 누르면 댓글 등록 요청
  const handleAddComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // submit 기본 동작 취소
    const formElem = event.currentTarget;
    const formData = new FormData(formElem);
    requestAddComment(formData,{
      onSuccess: () =>{
        formElem.reset();
      }
    });
    
  }

  return (
    <>
      <h4>댓글 등록</h4>
      <form onSubmit={handleAddComment} className="comment-form">
        <input type="text" name="name" placeholder="이름" />
        <input type="text" name="content" className="comment-content" placeholder="댓글 내용" />
        <button type="submit" disabled={ isPending }>등록</button>
        { error && <span>{ error.message }</span>}
      </form>
    </>
  );
}

export default CommentNew;
