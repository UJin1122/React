import "@/pages/style/BoardListAdd.css";
import { getAxios } from "@/pages/utils/axiosInstance";
import type { BoardInfoRes } from "@/types/board";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const axiosInstance = getAxios();

function BoardListAdd() {
  const queryClient = useQueryClient();

  const { mutate: addPost, isPending, error } = useMutation({
    mutationFn: (formData: FormData) =>
      axiosInstance.post<BoardInfoRes>(`/posts`, {
        title: formData.get('title'),
        content: formData.get('content'),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElem = e.currentTarget;
    const formData = new FormData(formElem);
    addPost(formData, {
      onSuccess: () => {
        formElem.reset();
      },
    });
  };

  return (
    <>
      <h2>게시글 등록</h2>
      <form onSubmit={handleSubmit} className="board-form">
        <input type="text" name="title" placeholder="제목" />
        <input type="text" name="content" placeholder="내용" />
        <button type="submit" disabled={isPending}>
          {isPending ? "등록 중..." : "등록"}
        </button>
      </form>
      {error && <span>{error.message}</span>}
    </>
  );

}

export default BoardListAdd;