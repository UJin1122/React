import type { TodoItem } from "@/pages/TodoItem";

type TodoAction = 
  | { type: 'ADD'; value: TodoItem }
  | { type: 'TOGGLE' | 'DELETE'; value: Pick<TodoItem, '_id'> };

// TODO 3. 상태관리 로직을 작성하고 TodoContainer 컴포넌트에서 useState대신 useReducer를 사용하도록 수정
function todoReducer(state: TodoItem[], action: TodoAction) {
  let newState;

  switch(action.type){
    case 'ADD':
      newState = [ ...state, action.value ];
      break;
    case 'TOGGLE':
      newState = state.map(item => item._id === action.value._id ? { ...item, done: !item.done } : item);
      break;
    case 'DELETE':
      newState = state.filter(item => item._id !== action.value._id );
      break;
    default:
      newState = state;
  }

  return newState;
}

// TODO 4. immer 라이브러리를 이용해서 상태의 불변성을 유지하도록 수정
// function todoReducer(state: TodoItem[], action: TodoAction) {
  
// }

export default todoReducer;