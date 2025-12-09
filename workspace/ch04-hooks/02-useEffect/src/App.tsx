import Counter from "@/components/Counter";
import Header from "@/components/Header";


function App(){
  console.log('\tApp 호출됨.');
  
  return(
    <>
    <div style={{ display:"flex", 
      flexFlow:"column", 
      justifyItems:"center",
      alignItems:"center" }}>
    <Header/>
    <Counter>10</Counter>
    </div>
    </>
  );
}
export default App;