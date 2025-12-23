import CounterContext from '@/contexts/CounterContext';
import { use, useEffect } from 'react';

function Left3({ showCounter = true }) {
  useEffect(()=>{
    console.log('#### Left3 렌더링.');
  });

  let counter = null;
  if(showCounter){
    counter = use(CounterContext);
  }
  return (
    <div>
      <h3>Left3</h3>
      <span>{ counter?.count }</span>
    </div>
  );
}

export default Left3;