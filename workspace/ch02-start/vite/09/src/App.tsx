import Title from "@/components/Title";
import TodoList from "@/pages/TodoList";


export interface TodoItem{
  _id: number,
  title: string,
  done: boolean,
}
 
 function App(){
      const list: TodoItem[] =[
        { _id: 1, title: '아침' ,done: true},
        { _id: 2, title: '점심' ,done: true},
        { _id: 3, title: '저녁' ,done: false},
      ];
      return (
        <div id="app">
          <div>
            <Title title="09 Vite로 개발  환경 구축 및 빌드, 배포" />
            <TodoList list = { list } />
          </div>
        </div>
      );
}

export default App;