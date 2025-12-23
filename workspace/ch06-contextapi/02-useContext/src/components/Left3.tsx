import { useCounter } from '@/contexts/CounterContext';
import { useEffect } from 'react';

function Left3({ showCounter = true }) {
  useEffect(()=>{
    console.log('#### Left3 렌더링.');
  });

  // 자식 컴포넌트에서 Context 사용
  // 커스텀 훅 사용 - null 체크가 포함되어 있어 옵셔널 체이닝 불필요

  const { count } = useCounter();
  return (
    <div>
      <h3>Left3</h3>
      <span>{ showCounter && count }</span>
    </div>
  );
}

export default Left3;