import { useState } from "react";

function useCounter(initCount: number){

  const [ count, setCount ] = useState(initCount);
  const [ change, setChange ] = useState(1);
  

  const handleChange = (newChange: number) => {
  setChange(newChange);  
  };
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // setChange(Number(e.target.value));  
  // };
  
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
    setCount(initCount);
  };

  return{ count, change, handleChange, handleDown, handleUp, handleReset };
}
export default useCounter;