interface CounterAction{
  type: 'UP' | 'DOWN' | 'RESET';
  value: number;
}

// 리듀서 함수
// 현재 상태와 action 객체를 받아서 새로운 상태를 반환하는 함수
// 상태 변경 로직은 컴포넌트 내부에 두지 않고 외부에서 구현
// state: 이전 상태
// action: 동작을 정의한 작업
// 리턴값: 새로운 상태
// 호출 예시 : counterReducer(5, {type : 'UP', value: 3}); -> 8
export function counterReducer(state: number, action: CounterAction){
  let newState = state;

  switch(action.type){
    case 'UP':
      newState = state + action.value;
      break;
    case 'DOWN':
      newState = state - action.value;
      break;
    case "RESET":
      newState = action.value;
      break;
    default:
      newState = action.value;
      break;
  }

  return newState;
}