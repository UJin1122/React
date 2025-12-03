import { useState } from "react";

export default function Counter(){
  console.log('\tCounter 렌더링.');

  const [ count, setCount ] = useState(0);

  const countUp = () => {
    setCount(count + 1);
  };

  function countDown(){
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  };

  return (
    <div id="counter">
      <button type="button">-_-</button>
      <button type="button">0_0</button>
      <button type="button">+_+</button>
      <span>{ count }</span>
    </div>
  );
}