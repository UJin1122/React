import { useEffect, useState } from "react";

const API_SERVER = '11https://fesp-api.koyeb.app/todo';

// 아이템 타입
interface Todo{
  _id: number;
  title: string;
  done: boolean;
}

// 목록 조회 결과 타입
interface TodoListRes{
  ok: 1;
  items: Todo[];
}

// 에러 타입
interface ErrorRes{
  ok: 0;
  message: string;
}

// 서버의 응답
type ResData = TodoListRes | ErrorRes;

function App(){
// TODO API 서버에서 할일 목록을 조회한 후 출력
// 할일 목록을 조회하는 동안에는 " 로딩중 " 메세지 표시
// 서버에서 정상 응답을 받을 경우 " 로딩중 " 메세지 해제. 할일 목록 출력
// 서버에서 에러를 응답 받을 경우 " 로딩중 " 메세지 해제. 에러 메세지 출력

// Todo 목록을 저장할 상태
const [ data, setData ] = useState<TodoListRes | null>(null);
const [ error, setError ] = useState<ErrorRes | null>(null);


// API 서버에서 할일 목록을 요청
const fetchTodo = async(url: string) => {
  try {
    const res = await fetch(API_SERVER + url);
    console.log('res', res);

    const jsonRes: ResData = await res.json();
    console.log('body', jsonRes);
    
    if(jsonRes.ok === 1){
    setData(jsonRes)
    }else{
      setError(jsonRes);
    }
    
  } catch (error) {
    console.error((error as Error).message);
    setError(error as ErrorRes);
  }
   
};

// 컴포넌트가 마운트 된 후에 실행
useEffect(()=>{
  fetchTodo('/todolist');
},[]);

const list = data?.items.map( item => <li key={ item._id }>{ item.title }</li>);

return( 
  <>
  <h1>09 Custom Hook - 커스텀 훅 없이 fetch API 사용</h1>
  <h2>할일 목록</h2>

  {/* <!-- 로딩중일 때 로딩중 메시지 표시 --> */}
  {/* { loddig && <p>로딩중...</p> } */}
  
  {/* <!-- 에러가 있을 경우 빨간색으로 에러 메시지 표시 --> */}
  { error && <p style={{color: "red"}}>네트워크 연결 오류</p> } 
      
  {/* <!-- 서버에서 받은 Todo 목록을 렌더링 --> */}
  <ul>
    { list }
  </ul>
  </>
);
}
export default App;