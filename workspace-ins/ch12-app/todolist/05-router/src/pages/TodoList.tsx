import TodoListItem from "@/pages/TodoListItem";
import { Link } from "react-router";

function TodoList() {
  return (
    <div id="main">
      <h2>할일 목록</h2>
      <div className="todo">
        <Link to="/todo/add">추가</Link>
        <br />
        <form className="search">
          <input type="text" autoFocus />
          <button type="submit">검색</button>
        </form>
        <ul className="todolist">
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
        </ul>
      </div>
    </div>
  );
}

export default TodoList;