import { useState } from "react";

function Counter() {
  console.log('\tCounter 호출됨');

  const initCount = 5;
  const [ count, setCount ] = useState(initCount);
  const [ step, setStep ] = useState(1);

  // 카운트 감소
  const handleDown = () => {
    setCount(count - step);
  };

  // 카운트 증가
  const handleUp = () => {
    setCount(count + step);
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
        value={ step }
        onChange={ (e) => setStep(Number(e.target.value)) }
      />
      <button type="button" onClick={ handleDown }>-_-</button>
      <button type="button" onClick={ handleReset }>0_0</button>
      <button type="button" onClick={ handleUp }>+_+</button>
      <span>{ count }</span>
    </div>
  );
}

export default Counter;