import TodoListItem from "@/pages/TodoListItem";

function TodoList() {
  return (
    <div id="main">
      <h2>할일 목록</h2>
      <div className="todo">
        <a href="./todoadd.html">추가</a>
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