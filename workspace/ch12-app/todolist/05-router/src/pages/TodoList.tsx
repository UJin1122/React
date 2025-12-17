import TodoListItem from "@/pages/TodoListItem";
import { NavLink } from "react-router";

function TodoList() {
  const dummyData = {
    items: [{
      _id: 1,
      title: '잠자기',
      content: '12시간 이상',
      done: true,
      createdAt: '2025.06.16 16:49:00',
      updatedAt: '2025.09.16 16:49:00',
    }, {
      _id: 2,
      title: '자바스크립트 복습',
      content: '해야되는데',
      done: false,
      createdAt: '2025.06.17 16:49:00',
      updatedAt: '2025.11.17 16:49:00',
    }]
  };

  
  const list = dummyData.items.map(item => <TodoListItem key={item._id} item={item} />);

  return (
    <>
    <div id="main">
      <h2>할일 목록</h2>
      <div className="todo">
        <NavLink to="/todo/add">추가</NavLink>
        {/* <a href="./todoadd.html">추가</a> */}
        <br/>
        <form className="search">
          <input type="text" autoFocus/>
          <button type="submit">검색</button>
        </form>
        <ul className="todolist">
          { list }
        </ul>
      </div>
    </div>
    </>
  );
}

export default TodoList;