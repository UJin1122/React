import Home from "@pages/Home";
import './App.css';
import { useState } from "react";

function App(){

  // 현재 url 경로가 수정되면 리렌더링이 필요하므로 상태로 관리
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // popstate 이벤트 처리 핸들러
  const handleLocationChange = () => {
    // 주소 꺼내기
    const newPath = window.location.pathname;
    console.log('popstate 이벤트', newPath);
    setCurrentPath(newPath);
  };

  window.addEventListener('popstate', handleLocationChange);

  // url에 맞는 컴포넌트를 반환
  const renderComponent = () => {

  };

  return (
    <>
      { renderComponent() }
    </>
  );
}

export default App;