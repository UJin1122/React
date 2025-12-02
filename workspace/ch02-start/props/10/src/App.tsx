import Counter from "./componets/Counter";
import Header from "./componets/Header";

function App(){
    return(
      <div id="app">
        <Header title="10 Button 컴포넌트에 Props 전달" />
        <Counter />
      </div>
    );
}

export default App;