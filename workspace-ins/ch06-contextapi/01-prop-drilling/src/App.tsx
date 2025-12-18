import { useEffect } from 'react';
import Left1 from '@/components/Left1';
import Right1 from '@/components/Right1';
import './App.css';

function App() {

  // count 정의

  // countUp() 정의

  useEffect(()=>{
    console.log('# App 렌더링.');
  });

  return (
    <>
      <h1>01 Prop Drilling</h1>
      <div id="container">
        <h1>App</h1>
        <div id="grid">
          <Left1 /> {/* props로 count 전달 */}
          <Right1 /> {/* props로 countUp 전달 */}
        </div>
      </div>
    </>
  );
}

export default App;