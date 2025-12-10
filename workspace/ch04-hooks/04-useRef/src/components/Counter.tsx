import Button from "@/components/Button";
import { useRef, useState } from "react";

interface CounterProps{
  children: string;
}

function Counter({ children }: CounterProps){
  console.log('\tCounter 호출됨.');

  const initCount = Number(children);
  
  const [ count, setCount ] = useState(initCount);
  // const [ change, setChange ] = useState(1);    // 값이 변경되면 컴포넌트가 불필요하게 리렌더링 됨

  // 값이 변경되면 변경된 값 유지, 리랜더링 되지 않음
  const stepRef = useRef(1);  // { current: 1 객체를 반환 }

    
  // 카운터 감소
  const handleDown = () => {
    setCount(count - stepRef.current);
  };

  // 카운터 증가
  const handleUp = () => {
    setCount(count + stepRef.current);
  };

  // 카운터 초기화
  const handleReset = () => {
    setCount(initCount);
  };

  return(
    <>
    <div id="counter">
    <label htmlFor="change" style={{fontSize:"20px"}}>증감치</label>
    <input style={{ padding:8, borderRadius:6, border:"solid 1px" }} 
      onChange={ (e) => stepRef.current = Number(e.target.value) }
      id="change" 
      type="number" 
      defaultValue = '1'
    />
    <div style={{display:"flex", alignContent:"center", justifyContent:"center", padding:"8px"}}>
    <Button type={ "button" } onClick={ handleDown }>-_-</Button>
    <Button bgColor="gray" style={{color:'black'}} type={ "button" } onClick={ handleReset }>0_0</Button>
    <Button type={ "button" } onClick={ handleUp }>+_+</Button>
    </div>
    <span style={{display:"flex", alignContent:"center", justifyContent:"center"}}>{ count }</span>
    </div>
    </>
  );
}
export default Counter;