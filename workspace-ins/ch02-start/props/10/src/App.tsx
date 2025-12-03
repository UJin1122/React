import Counter from "./components/Counter";
import Header from "./components/Header";

function App(){
  console.log('App 렌더링.');
  return (
    <div id="app">
      <Header />
      <Counter />
      <Counter />
    </div>
  );
}
export default App;