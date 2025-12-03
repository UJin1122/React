import { useState } from "react";

function App(){

  const [ position, setPosition ] =useState({x: 310, y: 290});

  function handleMove(event: React.PointerEvent<HTMLDivElement>){
    const containerRect = event.currentTarget.getBoundingClientRect();
    console.log(event.clientX-containerRect.x, event.clientY-containerRect.y);

    // setPosition({
    //   x: event.clientX - containerRect.x,
    //   y: event.clientY - containerRect.y
    // });

    const newPosition = ({
      x: event.clientX - containerRect.x,
      y: event.clientY - containerRect.y
    });

    setPosition(newPosition);
  }

  return(
    <>
    <h1>13 상태관리 대상이 객체일 경우 주의 사항</h1>
    <div className="container" onPointerMove={ handleMove }>
      <div className="circle"  style={{transform: `translate( ${position.x}px, ${position.y}px)`}}>

      </div>
    </div>
    </>
  );

}

export default App;