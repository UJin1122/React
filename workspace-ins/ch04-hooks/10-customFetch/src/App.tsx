import TodoInfo from "@pages/TodoInfo";
import TodoList from "@pages/TodoList";

function App() {

  const id = window.location.pathname.split('/').pop();

  return (
    <>
      { id ? <TodoInfo /> : <TodoList /> }
    </>
  );
}

export default App;