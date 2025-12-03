function Message(){

  let count = 0;


  /*
  제어 컴포넌트
    - input 요소에 value, onChange를 추가

  비제어 컴포넌트

  */

  return (
    <div>
      <input type="text" />
      <br />
      <span>입력 메세지: </span>
      <br />
      <span>입력 횟수: { count }</span>
    </div>
  );
}

export default Message;