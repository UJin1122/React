import { useState } from "react";

function Counter(){
  console.log('\tCounter 호출됨.');
  
  const [ count, setCount ] = useState(0);
  const [ change, setChange ] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setChange(Number(e.target.value));  
  };
  
  // 카운터 감소
  const handleDown = () => {
    setCount(count - change);
  };

  // 카운터 증가
  const handleUp = () => {
    setCount(count + change);
  };

  // 카운터 초기화
  const handleReset = () => {
    setCount(0);
  };

  return(
    <>
    <div id="counter">
    <label htmlFor="change">증감치</label>
    <input onChange={ handleChange }
      id="change" 
      type="number" 
      value={ change }
    />
    <button type="button" onClick={ handleDown }>-_-</button>
    <button type="button" onClick={ handleReset }>0_0</button>
    <button type="button" onClick={ handleUp }>+_+</button>
    <span>{ count }</span>
    </div>
    </>
  );
}
export default Counter;