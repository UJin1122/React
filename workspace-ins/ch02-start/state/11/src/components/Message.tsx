import { useState } from "react";

// 2. 모듈 스코프 변수를 사용하면 컴포넌트가 리렌더링되어도 이전 상태값이 유지되지만
// 모든 Message 컴포넌트에서 공유된다.
// let count = 0;

function Message(){

  console.log('\tMessage 렌더링');

  const [ msg, setMsg ] = useState('');

  // 3. 컴포넌트가 리렌더링 되어도 이전 상태값이 유지되어야 함
  // 여러 컴포넌트에 공유되면 안되는 독립적인 변수를 사용해야 함
  // useState()
  const [ count, setCount ] = useState(0);

  // 1. 지역변수이기 때문에 리렌더링되면(컴포넌트가 다시 실행) 0으로 초기화된다.
  // let count = 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
    console.log('count 증가 전', count);
    // count++;
    setCount(count + 1);
    console.log('count 증가 후', count);
  };


  /*
  제어 컴포넌트
    - input 요소에 value, onChange를 추가
    - 리액트의 state와 input 요소의 value를 동기화
  비제어 컴포넌트
    - input 요소에 value, onChange를 추가하지 않음
    - 리액트의 state와 input 요소의 value가 동기화되지 않음
  */

  return (
    <div>
      <input type="text" value={ msg } onChange={ handleChange } />
      <br />
      <span>입력 메세지: { msg }</span>
      <br />
      <span>입력 횟수: { count }</span>
    </div>
  );
}

export default Message;