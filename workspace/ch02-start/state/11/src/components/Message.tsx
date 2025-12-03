import { useState } from "react";

  
function Message(){

  console.log('\tmessage랜더링');

  const [ msg, setMsg ] = useState('');
  const [ count, setCount ] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     setMsg(e.target.value); 
     setCount(count + 1);
  };
  
  // 제어 컴포넌트 : 
    // input 요소에 value, onChange를 추가 
    // 리액트의 state와 input 요소의 value 를 동기화
  // 비제어 컴포넌트: 
    // input 요소에 value, onChange를 추가하지 않음 
    // 리액트의 state와 input 요소의 value 가 동기화되지 않음
  
  return(
    <div>
      <input type="text" value={ msg } onChange={ handleChange }/>
      <br />
      <span>입력 메세지: { msg } </span>
      <br />
      <span>입력 횟수:{ count } </span>
    </div>
  );
}

export default Message;