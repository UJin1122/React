import useCounterStore from '@/zustand/store';
import Left3 from '@components/Left3';
import { useEffect } from 'react';

function Left2() {
  useEffect(()=>{
    console.log('### Left2 렌더링.');
  });

  const user = useCounterStore(state => state.user);

  return (
    <div>
      <h2>Left2 - { user.name }</h2>
      <Left3 />
    </div>
  );
}

export default Left2;