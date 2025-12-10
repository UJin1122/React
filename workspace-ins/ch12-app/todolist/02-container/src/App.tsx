import TodoContainer from '@/pages/TodoContainer';
import Footer from '@components/Footer';
import Header from '@components/Header';

function App(){
  console.log('App 렌더링');
  return (
    <div id="todo">
      <Header />
      <TodoContainer />
      <Footer />
    </div>
  );
}

export default App
