function Home() {
  console.log('Home 렌더링');
  return (
    <>
      <header>
        <h1>리액트 라우터 - 01 클라이언트 라우팅 직접 구현</h1>
        <a className="menu-dark" href="home.html">home</a>
        <br/>
        <a className="menu" href="page1.html">page1</a>
        <br/>
        <a className="menu" href="page2.html">page2</a>
      </header>
      <h2>SPA Home</h2>
    </>
  )
}

export default Home;