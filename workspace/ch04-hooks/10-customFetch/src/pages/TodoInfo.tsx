import useAxios from "@/hooks/useAxios";
// import useFetch from "@/hooks/useFetch";
import type { TodoInfoRes } from "@/types/todo";
import { ClipLoader } from "react-spinners";

function TodoInfo() {

  const id = window.location.pathname.split('/').pop();

  // const { data, error, loading } = useFetch<TodoInfoRes>({ url: `/todolist/${id}` });
  const { data, error, loading } = useAxios<TodoInfoRes>({ url: `/todolist/${id}` });

  
  return (
    <>
      <h2>할일 상세 조회</h2>

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

      { data && 
        <div>
          <p>제목: { data.item.title }</p>
          <p>내용: { data.item.content }</p>
          <p>상태: { data.item.done ? '완료' : '미완료' }</p>
          <p>작성일: { data.item.createdAt }</p>
          <p>수정일: { data.item.updatedAt }</p>
        </div>
      }

      <a href="/">목록</a>
      
    </>
  );
}

export default TodoInfo;