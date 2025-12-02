import type { TodoItemType } from "./TodoItem";
import TodoItem from "./TodoItem";

interface TodoListProps{
  itemList: TodoItemType[],
  toggleDone: (num: number)=> void,
  deleteItem: (num: number)=> void,
}

function TodoList({ itemList, toggleDone, deleteItem }: TodoListProps){
      const list = itemList.map(item => <TodoItem key={ item.num } item={ item } toggleDone={ toggleDone } deleteItem={ deleteItem } />);
      return (
        <div style={{display:"flex", justifyContent:"center"}}>
        <ul className="todolist" style={{listStyle: "none", padding:0 }}>
          { list }
        </ul>
        </div>
      );
}

export default TodoList;
