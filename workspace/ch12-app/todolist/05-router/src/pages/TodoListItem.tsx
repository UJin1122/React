import type { Todo } from "@/types/todo";
import { NavLink } from "react-router";
interface TodoListItemProps{
  item: Todo;
}

function TodoListItem({ item }:TodoListItemProps) {
  return (
    <>
    <ul className="todolist">
      <li>
        <span>{ item._id }</span>
        <NavLink to="/todo/info"><s>{ item.title }</s></NavLink>
        <NavLink to="/todo/list">삭제</NavLink>
      </li>
    </ul>
    </>
  );
}

export default TodoListItem;