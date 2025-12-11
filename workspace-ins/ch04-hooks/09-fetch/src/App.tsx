import { useEffect, useState } from "react";

const API_SERVER = 'https://fesp-api.koyeb.app/todo';

function App() {

  /*
  TODO api 서버에서 할일 목록을 조회한 후 출력
  할일 목록을 조회하는 동안에는 "로딩중..." 메시지 표시
  서버에서 정상 응답을 받을 경우 "로딩중..." 메시지를 해제하고 할일 목록을 출력
  서버에서 에러를 응답 받을 경우 "로딩중..." 메시지를 해제하고 에러 메시지를 출력
  */


  // Todo 목록을 저장할 상태 (초기값: null)
  const [ data, setData ] = useState(null);

  // API 서버에서 할일 목록을 요청
  const fetchTodo = async (url: string) => {
    const res = await fetch(API_SERVER + url);
    console.log('res', res);

    const jsonRes = await res.json();
    console.log('body', jsonRes);
  };

  // 컴포넌트가 마운트 된 후에 실행
  useEffect(() => {
    fetchTodo('/todolist');
  }, []); // 빈 배열을 전달해서 마운트시 한번만 호출되도록 설정

  return (
    <>
      <h1>09 Custom Hook - 커스텀 훅 없이 fetch API 사용</h1>
      <h2>할일 목록</h2>

      {/* 로딩중일 때 로딩중 메시지 표시 */}
      <p>로딩중...</p> 
      
      {/* 에러가 있을 경우 빨간색으로 에러 메시지 표시 */}
      <p style={{color: 'red'}}>네트워크 연결 오류</p> 
          
      {/* 서버에서 받은 Todo 목록을 렌더링 */}
      <ul>
        <li>React 학습</li>
        <li>Next.js 학습</li>
        <li>파이널 프로젝트</li>
      </ul>
    </>
  );
}

export default App;