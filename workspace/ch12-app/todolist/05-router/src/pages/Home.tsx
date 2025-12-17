import Header from "@components/Header";
import Footer from "@components/Footer";

function Home() {
  return (
    <>
      <Header />
      <div id="main">
        <h2>Home</h2>
        <div className="todo">
          <p>Todo List App은 할일을 관리하는 리액트 앱입니다.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;