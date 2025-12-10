import Button from "@/components/Button";
import useMyReducer from "@/hooks/useMyReducer";
import { counterReducer } from "@/reducers";
import { useState } from "react";

interface CounterProps{
  children: string;
}


function Counter({ children }: CounterProps){
  console.log('\tCounter 호출됨.');

  const initCount = Number(children);
  
  // const [ count, setCount ] = useState(initCount);
  // const [ count, countDispatch ] = useReducer(counterReducer, initCount);
  const [ count, countDispatch ] = useMyReducer(counterReducer, initCount);
  const [ change, setChange ] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setChange(Number(e.target.value));  
  };
  
  // 카운터 감소
  const handleDown = () => {
    countDispatch({ type:'DOWN', value: change });
  };

  // 카운터 증가
  const handleUp = () => {
    countDispatch({ type:'UP', value: change });
  };

  // 카운터 초기화
  const handleReset = () => {
    countDispatch({ type:'RESET', value: initCount });
  };

  return(
    <>
    <div id="counter">
    <label htmlFor="change" style={{fontSize:"20px"}}>증감치</label>
    <input style={{ padding:8, borderRadius:6, border:"solid 1px" }} 
      onChange={ handleChange }
      id="change" 
      type="number" 
      value={ change }
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