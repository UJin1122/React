import { Link } from "react-router";

function TodoListItem() {
  return (
    <li>
      <span>1</span>
      <Link to="/todo/info">잠자기</Link>
      <Link to="/todo/list">삭제</Link>
    </li>
  );
}

export default TodoListItem;