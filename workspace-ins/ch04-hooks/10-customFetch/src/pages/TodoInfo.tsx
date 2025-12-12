function TodoInfo() {
  return (
    <>
      <h1>10 customHook - useFatch, useAxios 커스텀 훅 사용</h1>
      <h2>할일 상세 조회</h2>

      {/* <!-- 로딩중일 때 로딩중 메시지 표시 --> */}
      <p>로딩중...</p> 

      {/* <!-- 에러가 있을 경우 빨간색으로 에러 메시지 표시 --> */}
      <p style={{color: 'red'}}>/todo/todolist/12345 리소스를 찾을 수 없습니다.</p> 

      <div>
        <p>제목: React 학습</p>
        <p>내용: React 학습을 열심히 해보자!</p>
        <p>상태: 미완료</p>
        <p>작성일: 2025.12.08 05:57:23</p>
        <p>수정일: 2025.12.08 13:17:43</p>
      </div>
    </>
  );
}

export default TodoInfo;