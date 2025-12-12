import useAxios from "@/hooks/useAxios";
// import useFetch from "@/hooks/useFetch";
import type { TodoListRes } from "@/types/todo";
import { ClipLoader } from "react-spinners";

function TodoList() {

  // const { data, error, loading } = useFetch<TodoListRes>({ url: '/todolist' });
  const { data, error, loading } = useAxios<TodoListRes>({ url: '/todolist' });

  const list = data?.items.map(item => (
    <li key={ item._id }>
      <a href={`/${item._id}`}>{ item.title }</a>
    </li>
  ));

  return (
    <>
      <h2>할일 목록</h2>

      {/* <!-- 로딩중일 때 로딩중 메시지 표시 --> */}
      { loading && 
      <ClipLoader
        color="gray"
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> }
      
      {/* <!-- 에러가 있을 경우 빨간색으로 에러 메시지 표시 --> */}
      { error && <p style={{color: 'red'}}>{ error.message }</p> }
          
      {/* <!-- 서버에서 받은 Todo 목록을 렌더링 --> */}
      <ul>
        { data && list }
      </ul>
    </>
  );
}

export default TodoList;