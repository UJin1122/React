import Home from "@pages/Home";
import './App.css';
import { useEffect, useState } from "react";
import Page1 from "@pages/Page1";
import Page2 from "@pages/Page2";

function App(){

  const [ currentPath, setCurrentPath ] = useState(window.location.pathname);

  // popstate 이벤트 처리 핸들러
  const handleLocationChange= () => {
    // 주소 꺼내기
    setCurrentPath(window.location.pathname);
  };

  useEffect(() => {
    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  // url에 맞는 컴포넌트 반환
  const renderComponent = () => {
    switch(currentPath){
      case '/home':
        return <Home/>;
      case '/page1':
        return <Page1/>;
      case '/page2':
        return <Page2/>;
      default:
        return <Home/>;
    }
  };

  return (
    <>
       { renderComponent() }
    </>
  );
}

export default App;