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
        <a href="./todoedit.html">수정</a>
        <a href="./todolist.html">목록</a>
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
          <a href="./todoinfo.html">저장</a>
          <a href="./todoinfo.html">취소</a>
        </form>
      </div>
    </div>
  );
}

export default TodoEdit;