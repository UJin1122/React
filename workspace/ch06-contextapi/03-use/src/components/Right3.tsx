import CounterContext from '@/contexts/CounterContext';
import { use, useEffect } from 'react';

function Right3() {
  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });
  
  const { countUp, reset, countDown } = use(CounterContext)!;
  return (
    <div>
      <h3>Right3</h3>
      <button style={{ borderRadius:'7px', padding:'5px', marginRight:'5px'}} onClick={ () => { countDown(1)} }>-1</button>
      <button style={{ borderRadius:'7px', padding:'5px', marginRight:'5px'}} onClick={ () => { reset(0) } }>0</button>
      <button style={{ borderRadius:'7px', padding:'5px', marginRight:'5px'}} onClick={ () => { countUp(1)  } }>+1</button>
    </div>
  );
}

export default Right3;