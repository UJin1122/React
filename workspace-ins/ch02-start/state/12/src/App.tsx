import { useState } from "react";

function App(){
  console.log('App 렌더링');

  const [ count, setCount ] = useState(0);

  const handleClick = () => {
    console.log('클릭 핸들러 시작', count); // 0, 1

    // setter 함수가 호출되어도 즉시 리렌더링하지 않고, 
    // 이벤트 핸들러 함수가 완전히 실행된 후(리턴한 후)에 상태를 체크해서 필요하다면 리렌더링함
    // setCount(count + 1); // 0 + 1 = 1, 1 + 1 = 2
    // setCount(count + 1); // 0 + 1 = 1, 1 + 1 = 2
    // setCount(count + 1); // 0 + 1 = 1, 1 + 1 = 2

    // 리렌더링 되기 이전에 수정된 상태값을 꺼내서 사용하려면 콜백 함수를 setter에 전달해야 함
    // 콜백 함수의 인자값으로 현재 상태값이 전달되고 콜백 함수의 리턴값이 새로운 상태값으로 저장됨
    setCount((currCount) => currCount + 1); // 0 + 1 = 1
    setCount((currCount) => currCount + 1); // 1 + 1 = 2
    setCount((currCount) => currCount + 1); // 2 + 1 = 3

    console.log('클릭 핸들러 종료', count); // 0, 1
  };

  return (
    <>
      <h2>12 이벤트 핸들러에서 state 값을 여러번 변경했을 때 문제점</h2>
      <p>{ count }</p>
      <button onClick={ handleClick }>+1+1+1</button>
    </>
  );
}

export default App;