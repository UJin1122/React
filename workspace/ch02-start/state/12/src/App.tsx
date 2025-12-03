import { useState } from "react";

function App(){
  console.log('APP랜더링');

  const handleClick = () => {
    console.log('click');
    for (let i = 1; i <= 3; i++) {
      setTimeout(() => {
        setCount( prev => prev + 1 );
      }, i * 100); 
    }
    // setCount((currCount)=> currCount +1);
    // setCount((currCount)=> currCount +1);
    // setCount((currCount)=> currCount +1);
  };

  const [ count, setCount ] = useState(0); 

    return(
    <>
    <h2>12 이벤트 핸들러에서 state 값을 여러번 변경했을 때 문제점</h2>
    <p>{ count }</p>
    <button onClick={ handleClick }>+1+1+1</button>
    </>
  );

}
export default App;