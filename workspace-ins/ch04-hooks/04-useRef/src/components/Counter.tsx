import Button from "@/components/Button";
import { useRef, useState } from "react";

interface CounterProps {
  children: string;
}

function Counter({ children }: CounterProps) {
  console.log('\tCounter 호출됨');

  const initCount = Number(children);
  const [ count, setCount ] = useState(initCount);
  // const [ step, setStep ] = useState(1); // 값이 변경되면 컴포넌트가 불필요하게 리렌더링 됨

  // 1. 값이 변경 되면 변경된 값을 유지하면서 리렌더링이 발생하지 않음
  const stepRef = useRef(1); // { current: 1 } 객체를 반환

  // 2. DOM 객체에 대한 직접 참조를 사용할 때
  const stepElem = useRef<HTMLInputElement>(null); // { current: null } 객체를 반환

  // 카운트 감소
  const handleDown = () => {
    setCount(count - stepRef.current);
  };

  // 카운트 증가
  const handleUp = () => {
    setCount(count + stepRef.current);
  };

  // 카운트 초기화
  const handleReset = () => {
    setCount(initCount);
    // step input 요소에 포커스 지정
    // const stepElem = document.querySelector('#step') as HTMLInputElement;

    stepElem.current?.focus();
  };

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      <input 
        ref={ stepElem }
        id="step" 
        type="number" 
        defaultValue="1"
        onChange={ (e) => stepRef.current = Number(e.target.value) }
      />
      <Button bgColor="red" color="black" onClick={ handleDown }>-_-</Button>
      <Button bgColor="gray" type="submit" onClick={ handleReset }>0_0</Button>
      <Button type="reset" onClick={ handleUp }>+_+</Button>
      <span>{ count }</span>
    </div>
  );
}

export default Counter;