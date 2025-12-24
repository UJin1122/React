import counterActionCreator from '@/redux/counterActionCreator';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function Right3() {
  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });

  // TODO 5. Store 사용
  // Redux Store에 액션을 전달하기 위해 useDispatch 사용
  const dispatch = useDispatch();
  
  return (
    <div>
      <h3>Right3</h3>
      <button onClick={ () => dispatch(counterActionCreator.countDown(1)) }>-1</button>
      <button onClick={ () => dispatch(counterActionCreator.countReset()) }>0</button>
      <button onClick={ () => dispatch({ type: 'countUp', payload: { step: 1 } }) }>+1</button>
    </div>
  );
}

export default Right3;