import Button from "@/components/Button";
import useCounter from "@/hooks/useCounter";

interface CounterProps{
  children: string;
}

function Counter({ children }: CounterProps){
  console.log('\tCounter 호출됨.');

  const initCount = Number(children);
  
  const { count, change, handleChange, handleDown, handleUp, handleReset } = useCounter(initCount);
  
  return(
    <>
    <div id="counter">
    <label htmlFor="change" style={{fontSize:"20px"}}>증감치</label>
    <input style={{ padding:8, borderRadius:6, border:"solid 1px" }} 
      onChange={ (e) => handleChange(Number(e.target.value)) }
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