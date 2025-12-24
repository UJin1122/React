import { useEffect } from 'react';
import { useAtom, useSetAtom } from 'jotai';
import { countAtom, countDownAtom } from '@/jotai/atoms';

function Right3() {
  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });
  const [ count,setCount ] =useAtom(countAtom);
  const countUp = (step: number) => {
    setCount(count + step);
  };

  const countDown = useSetAtom(countDownAtom);

  return (
    <div>
      <h3>Right3</h3>
      <button onClick={ () => countDown(1) }>-1</button>
      <button onClick={ () => setCount(0) }>0</button>
      <button onClick={ () => countUp(1) }>+1</button>
    </div>
  );
}

export default Right3;