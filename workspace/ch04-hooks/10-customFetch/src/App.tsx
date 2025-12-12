import TodoInfo from "@/pages/TodoInfo";
import TodoInput from "@/pages/TodoInput";
import TodoList from "@/pages/TodoList";

function App(){

const id = window.location.pathname.split('/').pop();

return(
  <div style={{ 
    display:"flex", 
    alignItems:"center",
    flexFlow:"column",
    }}>
  <h1>10 customHook - useFatch, useAxios 커스텀 훅 사용</h1>
  <TodoInput/>
  { id ? <TodoInfo /> : <TodoList /> }
  </div>
);
}
export default App;