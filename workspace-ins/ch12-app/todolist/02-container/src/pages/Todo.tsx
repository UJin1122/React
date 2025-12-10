import type { TodoItem } from "@/pages/TodoItem";
import TodoInput from "@pages/TodoInput";
import TodoList from "@pages/TodoList";

interface TodoProps {
  itemList: TodoItem[];
  addItem: (title: string) => void;
  toggleDone: (_id: number) => void;
  deleteItem: (_id: number) => void;
}

function Todo({ addItem, ...props }: TodoProps){
  console.log('\tTodo 렌더링');

  return (
    <div id="main">
      <div id="container">
        <ul>
          <li>
            <h2>할일 목록</h2>
            <TodoInput addItem={ addItem } />
            <TodoList { ...props } />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Todo;