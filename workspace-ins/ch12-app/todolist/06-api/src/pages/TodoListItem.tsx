import type { Todo } from "@/types/todo";
import { Link, useFetcher } from "react-router";

interface TodoListItemProps {
  item: Todo;
}

function TodoListItem({ item }: TodoListItemProps) {
  // 페이지 이동 없이 action이나 loader를 직접 호출
  const fetcher = useFetcher();

  const handleDelete = () => {
    // fetcher.submit(formData, options)
    fetcher.submit(null, {
      method: 'delete',
      action: `/todo/list/${item._id}`, // 호출할 action을 등록한 path를 지정
    }); // action을 직접 호출
  };
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