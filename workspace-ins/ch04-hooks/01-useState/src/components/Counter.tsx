import { useState } from "react";

function Counter() {
  console.log('\tCounter 호출됨');

  const initCount = 5;
  let [ count, setCount ] = useState(initCount);

  // 카운트 감소
  const handleDown = () => {
    setCount(count - 1);
  };

  // 카운트 증가
  const handleUp = () => {
    setCount(count + 1);
  };

  // 카운트 초기화
  const handleReset = () => {
    setCount(initCount);
  };

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      <input 
        id="step" 
        type="number" 
      />
      <button type="button" onClick={ handleDown }>-_-</button>
      <button type="button" onClick={ handleReset }>0_0</button>
      <button type="button" onClick={ handleUp }>+_+</button>
      <span>{ count }</span>
    </div>
  );
}

export default Counter;