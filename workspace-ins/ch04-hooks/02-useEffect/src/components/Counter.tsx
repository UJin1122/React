import Button from "@/components/Button";
import { useEffect, useState } from "react";

interface CounterProps {
  children: string;
}

function Counter({ children }: CounterProps) {
  console.log('\tCounter 호출됨');

  const initCount = Number(children);
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

  // 리액트 규칙: 렌더링 중에 상태가 변경되면 안됨

  // TODO 1. 1초 후에 handleUp()을 호출해서 자동으로 값을 1회 증가
  // setTimeout(() => {
  //   console.log('무한 렌더링');
  //   handleUp();
  // }, 1000);

  console.log('input 요소', document.querySelector('input'));
  useEffect(() => {
    console.log('useEffect 내부에서 input 요소', document.querySelector('input'));
    // document.querySelector('input')?.focus();
  });

  // useEffect(() => { // setup
  //   console.log('\t\tCounter 마운트됨');
  //   setTimeout(() => {
  //     handleUp();
  //   }, 1000);
  //   console.log('dependencies에 빈배열을 지정하면 마운트된 후에 한번만 호출됨');
  // }, []);

  // TODO 2. 증감치(step)가 수정되면 1초 후에 handleUp()을 호출해서 자동으로 값을 1회 증가

  // TODO 3. 1초마다 handleUp()을 호출해서 자동으로 값을 계속 증가
  useEffect(() => { // setup
    console.log('\t\tCounter 마운트 또는 업데이트 됨');
    setTimeout(() => {
      handleUp();
    }, 1000);
    console.log('dependencies를 생략하면 마운트된 후와 업데이트된 후에도 호출됨');
  });

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      <input 
        id="step" 
        type="number" 
        value={ step }
        onChange={ (e) => setStep(Number(e.target.value)) }
      />
      <Button bgColor="red" color="black" onClick={ handleDown }>-_-</Button>
      <Button bgColor="gray" type="submit" onClick={ handleReset }>0_0</Button>
      <Button type="reset" onClick={ handleUp }>+_+</Button>
      <span>{ count }</span>
    </div>
  );
}

export default Counter;