import useCounterStore from '@/zustand/store';
import { useEffect } from 'react';

function Left3() {
  useEffect(()=>{
    console.log('#### Left3 렌더링.');
  });

  // 전체 상태를 구독
  // const { count } = useCounterStore();

  // count만 선택 구독
  const count = useCounterStore(state => state.count);

  return (
    <div>
      <h3>Left3</h3>
      <span>{ count }</span>
    </div>
  );
}

export default Left3;