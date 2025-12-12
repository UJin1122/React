function TodoList() {
  return (
    <>
      <h1>10 customHook - useFatch, useAxios 커스텀 훅 사용</h1>
      <h2>할일 목록</h2>

      {/* <!-- 로딩중일 때 로딩중 메시지 표시 --> */}
      <p>로딩중...</p> 
      
      {/* <!-- 에러가 있을 경우 빨간색으로 에러 메시지 표시 --> */}
      <p style={{color: 'red'}}>네트워크 연결 오류</p> 
          
      {/* <!-- 서버에서 받은 Todo 목록을 렌더링 --> */}
      <ul>
        <li>React 학습</li>
        <li>Next.js 학습</li>
        <li>파이널 프로젝트</li>
      </ul>
    </>
  );
}

export default TodoList;