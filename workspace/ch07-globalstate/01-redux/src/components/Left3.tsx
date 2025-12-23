import type { RootState } from '@/redux/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Left3() {
  useEffect(()=>{
    console.log('#### Left3 렌더링.');
  });

  // 5. Store 사용
  // Redus store에 count 값 꺼내기
  const count = useSelector((state: RootState) => state.count);

  return (
    <div>
      <h3>Left3</h3>
      <span>{ count }</span>
    </div>
  );
}

export default Left3;