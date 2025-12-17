import type { Todo } from "@/types/todo";
import { NavLink, Outlet, useParams } from "react-router";
  const dummyData: Todo = {
    _id: 5,
    title: '임시 데이터',
    content: '임시 데이터 입니다.',
    done: true,
    createdAt: '2025.12.12 12:23:45',
    updatedAt: '2026.12.12 13:45:12'
  };
function TodoInfo() {
 
  const data = dummyData;

  // URL이 '/list/3'로 지정했고 실제 URL이 '/list/3'일때
  // useParams()는 { _id:'3' }을 반환
  const { _id } = useParams();
  return (
    <>
    <div id="main">
        <h2>할일 상세 보기</h2>
        <div className="todo">
          <div>id:{ _id }</div>
          <div>제목 : { data.title }</div>
          <div>내용 : { data.content }</div>
          <div>상태 : { data.done? '완료' : '미완료' }</div>
          <div>작성일 : { data.createdAt }</div>
          <div>수정일 : { data.updatedAt }</div>
          
          <NavLink to="/todo/edit">수정</NavLink>
          <NavLink to="/todo/list">목록</NavLink>

        </div>
        <Outlet />
      </div>
    </>
  );
}

export default TodoInfo;