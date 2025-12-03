import { useState } from "react";
import Button from "./Button";

function Counter(){
  console.log("\tCounter 랜더링");
  
  const [ count, setCount ] = useState(0);
  
  // 카운터 감소
  const countDown = () => {
    setCount(count - 1);
  };

  // 카운터 증가
  const countUp = () => {
    setCount(count + 1);
  };

  // 카운터 초기화
  const countReset = () => {
    setCount(0);
  };

  return(
    <div id="counter">
      <div style={{gap:"10px",padding:"10px",display:"flex" ,justifyContent:"center", alignItems:"center"}}>
        <Button onClick={ countDown } color="#a38961ff">-_-</Button>
        <Button onClick={ countReset } color="#2d5734ff">0_0</Button>
        <Button onClick={ countUp } color="gray">+_+</Button>
      </div>
      <span style={{
        gap:"10px",
        padding:"10px",
        display:"flex" ,
        justifyContent:"center", 
        alignItems:"center",
        fontSize:"20px"}}>{ count }</span>
    </div>
  );
}

export default Counter;