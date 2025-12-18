import { useNavigate, useParams } from "react-router";

function TodoEdit() {
  // 페이지 이동에 사용
  const navigate = useNavigate();
  
  const { _id } = useParams();

  return (
    <>
      <h2>할일 수정</h2>
      <div className="todo">
        <form>
          <label htmlFor="title">제목 :</label>
          <input type="text" id="title" value="잠자기" autoFocus />
          <br />
          <label htmlFor="content">내용 :</label>
          <textarea id="content" cols={23} rows={5}>주말에 수업 끝나면 잠이나 실컷 자야지</textarea>
          <br />
          <label htmlFor="done">완료 :</label>
          <input type="checkbox" id="done" checked />
          <br />
          <button type="button" onClick={ () => navigate(-1) }>저장</button>
          <button type="reset" onClick={() => navigate(`/todo/list/${_id}`, {state:{from:'edit', message:'수정 취소'}})}>취소</button>
        </form>
      </div>
    </>
  );
}

export default TodoEdit;