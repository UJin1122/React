import type { TodoItem } from "@/pages/TodoItem";

type TodoAction = 
  | { type: 'ADD'; value: TodoItem }
  | { type: 'TOGGLE' | 'DELETE'; value: Pick<TodoItem, '_id'> };

// TODO 3. 상태관리 로직을 작성하고 TodoContainer 컴포넌트에서 useState대신 useReducer를 사용하도록 수정
function todoReducer(state: TodoItem[], action: TodoAction) {

}

// TODO 4. immer 버전으로 만들기
function todoReducer(state: TodoItem[], action: TodoAction) {
  
}
export default todoReducer;