import Home from "@pages/Home";
import './App.css';
import { useEffect, useState } from "react";
import Page1 from "@pages/Page1";
import Page2 from "@pages/Page2";

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

  useEffect(() => { // setup(마운트 후에 호출)
    window.addEventListener('popstate', handleLocationChange);
    return () => { // cleanup(언마운트시에 호출)
      // 컴포넌트가 언마운트되면 이벤트 핸들러 제거
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []); // 빈 배열로 지정해서 마운트에만 호출

  // url에 맞는 컴포넌트를 반환
  const renderComponent = () => {
    switch(currentPath){
      case '/home':
        return <Home />;
      case '/page1':
        return <Page1 />;
      case '/page2':
        return <Page2 />;
      default:
        return <p>404 에러</p>;
    }
  };

  return (
    <>
      { renderComponent() }
    </>
  );
}

export default App;