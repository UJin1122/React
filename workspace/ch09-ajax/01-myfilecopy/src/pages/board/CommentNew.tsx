import { _id, url } from "@/types/board";
import React, { useState } from "react";
import "@/pages/style/CommentNew.css";


function CommentNew({ reload }: { reload: () => void; }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!content.trim()) {
      alert("댓글 내용을 입력하세요.");
      return;
    }

    const formElem = e.currentTarget;
    const formData = new FormData(formElem);
    
    try {
      setIsLoading(true);
      const jsonBody = Object.fromEntries(formData.entries());
      const response = await fetch(
        `${url}/posts/${_id}/replies`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "client-id": "openmarket",
          },
          body: JSON.stringify(jsonBody),
        }
      );
      if(response.ok){
        console.log('등록 성공');
        setName('');
        setContent('');
        reload();
      }else{
        throw new Error();
      }
    } catch (err) {
      setError(err as Error);
      setData(null);
      return false;
    }finally{
      setIsLoading(false);
    }
  }
  const handleAddComment = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault
  }

  return (
    <>
      <h4>댓글 등록</h4>
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="content"
          className="comment-content"
          placeholder="댓글 내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">등록</button>
      </form>
    </>
  );
}

export default CommentNew;