// TODO 2. Reducer 생성

import { COUNTER_ACTION } from "@/redux/counterActionCreator";

// 초기 상태 정의
const initialState = {
  count: 5,
};

// Action의 타입
interface CounterAction {
  type: string;
  payload: { step: number };
}

// 리듀서 함수
// Store에서 state(이전상태), action을 전달받아 새로운 상태를 반환
// 순수 함수이며 상태의 불변성을 지켜야 함
function counterReducer(state=initialState, action: CounterAction) {
  switch(action.type) {
    case COUNTER_ACTION.UP:
      return {
        ...state,
        count: state.count + action.payload.step
      };
    case COUNTER_ACTION.DOWN:
      return {
        ...state,
        count: state.count - action.payload.step
      };
    case COUNTER_ACTION.RESET:
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
}

export default counterReducer;
