import { Link } from "react-router";

function TodoEdit() {
  return (
    <div id="main">
      <h2>할일 상세 보기</h2>
      <div className="todo">
        <div>제목 : 잠자기</div>
        <div>내용 : 주말에 수업 끝나면 잠이나 실컷 자야지</div>
        <div>상태 : 미완료</div>
        <div>작성일 : 2025.12.16 12:23:45</div>
        <div>수정일 : 2025.12.16 13:45:12</div>
        <Link to="/todo/edit">수정</Link>
        <Link to="/todo/list">목록</Link>
      </div>
      <h2>할일 수정</h2>
      <div className="todo">
        <form>
          <label htmlFor="title">제목 :</label>
          <input type="text" id="title" value="잠자기" autoFocus />
          <br />
          <label htmlFor="content">내용 :</label>
          <textarea id="content" cols={23} rows={5}>주말에 수업 끝나면 잠이나 실컷 자야지</textarea>
          <br />
          <label htmlFor="done">완료 :</label>
          <input type="checkbox" id="done" checked />
          <br />
          <Link to="/todo/info">저장</Link>
          <Link to="/todo/info">취소</Link>
        </form>
      </div>
    </div>
  );
}

export default TodoEdit;