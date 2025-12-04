import { useState } from "react";

function App(){

  const [ position, setPosition ] = useState({ x: 300, y: 200 });

  function handleMove(event: React.PointerEvent<HTMLDivElement>){
    // 요소의 크기와 뷰포트 기준 위치를 반환하는 DOM 메서드로 DOMRect 객체를 반환
    // DOMRect: left(x), top(y), right, bottom, width, height 속성을 가짐
    const containerRect = event.currentTarget.getBoundingClientRect();
    console.log(event.clientX - containerRect.x, event.clientY - containerRect.y);

    // 객체의 속성만 변경하는건 참조 주소가 그대로이기 때문에 리렌더링이 발생하지 않음
    // position.x = event.clientX - containerRect.x;
    // position.y = event.clientY - containerRect.y;
    // setPosition(position);

    // 새로운 객체로 setter를 호출해야 리렌더링이 발생
    const newPosition = {
      x: event.clientX - containerRect.x,
      y: event.clientY - containerRect.y
    };

    setPosition(newPosition);
  }

  return (
    <>
      <h1>13 상태관리 대상이 객체일 경우 주의 사항</h1>
      <div className="container" onPointerMove={ handleMove }>
        <div className="circle" style={{pointerEvents: 'none', transform: `translate(${position.x}px, ${position.y}px)`}}></div>
      </div>
    </>
  );
}

export default App;