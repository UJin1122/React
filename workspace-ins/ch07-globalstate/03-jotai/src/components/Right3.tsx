import { countAtom, countDownAtom } from '@/jotai/atoms';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

function Right3() {
  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });

  // useAtom: useState처럼 getter, setter를 배열로 반환. 구독됨
  // const [count, setCount] = useAtom(countAtom);

  // useSetAtom: setter만 사용
  const setCount = useSetAtom(countAtom);
  const countUp = (step: number) => {
    setCount((count) => count + step);
  };

  // 상태 변경 로직을 atom에 직접 정의한 경우
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