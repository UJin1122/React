import { _id, url } from "@/types/board";
import { useState } from "react";

/*----------클로드의 코드------------*/ 
interface CommentNewProps {
  onCommentAdded?: () => void;
}
/*--------------------------------*/
function CommentNew({ onCommentAdded }: CommentNewProps) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("이름을 입력하세요.");
      return;
    }

    if (!content.trim()) {
      alert("댓글 내용을 입력하세요.");
      return;
    }

    try {
      const response = await fetch(
        `${url}/posts/${_id}/replies`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "client-id": "openmarket",
          },
          body: JSON.stringify({
            name: name,
            content: content,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("댓글 등록 실패.");
      }

      alert("댓글이 등록되었습니다.");
      setName("");
      setContent("");
      // 클로드의 코드
      onCommentAdded?.();
    } catch (error) {
      console.error("댓글 등록 오류:", error);
      alert("댓글 등록 중 오류가 발생했습니다.");
    }
  };

  return (
    <>
      <h4>댓글 등록</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <textarea
          rows={3}
          cols={22}
          placeholder="댓글 내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">등록</button>
      </form>
    </>
  );
}

export default CommentNew;