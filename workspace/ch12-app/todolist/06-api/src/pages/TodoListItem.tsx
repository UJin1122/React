import type { Todo } from "@/types/todo";
import { Link, useFetcher } from "react-router";

interface TodoListItemProps {
  item: Todo;
}

function TodoListItem({ item }: TodoListItemProps) {
  // action이나 loader를 직접 호출
  const fetcher = useFetcher();

  const handleDelete = () => {
    fetcher.submit(null,{
    method: 'delete',
    action: `/todo/list/${item._id}`
    });
  }

  return (
    <li>
      <span>{item._id}</span>
      <Link to={`/todo/list/${item._id}`}>{item.title}</Link>
      <button 
      type="button"
      onClick={ handleDelete }
      >삭제</button>
    </li>
  );
}

export default TodoListItem;