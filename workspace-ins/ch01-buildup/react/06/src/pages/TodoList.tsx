import type { TodoItemType } from "./TodoItem";
import TodoItem from "./TodoItem";

interface TodoListProps {
  itemList: TodoItemType[];
  toggleDone: (num: number) => void;
  deleteItem: (num: number) => void;
}

function TodoList({ itemList, toggleDone, deleteItem }: TodoListProps){
  const list = itemList.map(item => <TodoItem key={ item.num } item={ item } toggleDone={ toggleDone } deleteItem={ deleteItem } />);
  return (
    <ul className="todolist">
      { list }
    </ul>
  );
}

export default TodoList;