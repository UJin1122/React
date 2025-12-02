import React from "react";

function Counter(){
  
  const [ count, setCount ] = React.useState(0);
  
  // 카운터 감소
  const handleDown = () => {
    setCount(count - 1);
  };

  // 카운터 증가
  const handleUp = () => {
    setCount(count + 1);
  };

  // 카운터 초기화
  const handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event);
    setCount(0);
  };

  return(
    <div id="counter">
      <div style={{gap:"10px",padding:"10px",display:"flex" ,justifyContent:"center", alignItems:"center"}}>
        <button onClick={ handleDown } style={{borderRadius:"100%", border:"1px solid white", cursor: "pointer" ,width:"40px",height:"40px"}} type="button">-_-</button>
        <button onClick={ handleReset } style={{borderRadius:"100%", border:"1px solid white", cursor: "pointer" ,width:"40px",height:"40px"}} type="button">0_0</button>
        <button onClick={ handleUp } style={{borderRadius:"100%", border:"1px solid white", cursor: "pointer" ,width:"40px",height:"40px"}} type="button">+_+</button>
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