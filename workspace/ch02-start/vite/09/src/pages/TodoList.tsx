import type { TodoItem } from "@/App";

function TodoList({list}: { list: TodoItem[] }){
      const items = list.map(item => <li key={ item._id }>{item.title}-{item.done ? '먹음' : '안먹음' }</li> );
      return (
        <ul className="todolist">
          { items }
        </ul>
      );
}

export default TodoList;