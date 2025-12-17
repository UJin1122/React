import TodoListItem from "@/pages/TodoListItem";
import { Link } from "react-router";

const dummyData = {
  items: [{
    _id: 1,
    title: '잠자기',
    content: '실컷 잠자기',
    done: true,
    createdAt: '2025.12.16 16:49:00',
    updatedAt: '2025.12.17 17:19:20',
  }, {
    _id: 2,
    title: '자바스크립트 복습',
    content: 'async/await 복습',
    done: false,
    createdAt: '2025.12.17 10:49:00',
    updatedAt: '2025.12.18 16:44:03',
  }]
};

function TodoList() {

  const data = dummyData;

  const list = data.items.map(item => <TodoListItem key={item._id} item={item} />);

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
          { list }
        </ul>
      </div>
    </div>
  );
}

export default TodoList;