import Counter from "@/components/Counter";
import Header from "@/components/Header";


function App(){
  console.log('\tApp 호출됨.');
  
  return(
    <>
    <Header/>
    <Counter/>
    </>
  );
}
export default App;