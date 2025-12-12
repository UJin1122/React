import { useState } from "react";
import type { TodoCreateReq, TodoCreateRes, ErrorRes } from "@/types/todo";

const API_SERVER = 'https://fesp-api.koyeb.app/todo';

function TodoInput() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setError("제목을 입력해주세요.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const requestBody: TodoCreateReq = {
        title: title.trim(),
        ...(content.trim() && { content: content.trim() })
      };

      // /todolist 경로 추가!
      const response = await fetch(`${API_SERVER}/todolist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data: TodoCreateRes | ErrorRes = await response.json();

      if (data.ok === 1) {
        setTitle("");
        setContent("");
        alert("할일 추가 완료");
        window.location.reload();
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("네트워크 연결 오류");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2>할일 추가</h2>
      <form 
      style={{ 
        display:"flex", 
        alignItems:"center",
        flexFlow:"column",
        gap:"5px",
      }}
      onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">제목: </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목 입력"
            disabled={loading}
          />
        </div>
        
        <div>
          <label htmlFor="content">내용: </label>
          <input
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용 입력"
            disabled={loading}
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "추가중..." : "할일 추가"}
        </button>
      </form>
    </>
  );
}

export default TodoInput;