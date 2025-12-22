import CounterContext from '@/contexts/CounterContext';
import { useContext, useEffect } from 'react';

function Right3() {
  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });
  
  const counter = useContext(CounterContext);

  return (
    <div>
      <h3>Right3</h3>
      <button style={{ borderRadius:'7px', padding:'5px', marginRight:'5px'}} onClick={ () => { counter?.countUp(1) } }>+1</button>
      <button style={{ borderRadius:'7px', padding:'5px', marginRight:'5px'}} onClick={ () => { counter?.reset(0) } }>0</button>
      <button style={{ borderRadius:'7px', padding:'5px', marginRight:'5px'}} onClick={ () => { counter?.countDown(1) } }>-1</button>
    </div>
  );
}

export default Right3;