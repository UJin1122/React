import ClickMe from "@/ClickMe";
import { useState } from "react";

function App() {
  console.log('App 리렌더링.');
  const [ show, setShow ] = useState<boolean>(true);

  // 버튼 클릭 시 ClickMe 컴포넌트를 제거
  return (
    <div>
      <h1>03 클래스 컴포넌트 - 컴포넌트의 라이프 사이클</h1>
      <button onClick={() => setShow(false)}>ClickMe 제거</button>
      { show ? <ClickMe level={2} /> : '' }
    </div>
  );
}

export default App;