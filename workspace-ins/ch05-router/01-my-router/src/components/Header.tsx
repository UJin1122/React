function Header() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 브라우저의 기본동작 취소
    e.preventDefault();

    // History API를 사용해서 URL 변경하고 history에 쌓는다.
    window.history.pushState(null, '', e.currentTarget.href);

    // dispatchEvent: 이벤트를 수동으로 발생
    // new PopStateEvent(): 브라우저의 뒤로/앞으로 가기 등의 이벤트를 생성
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <>
      <header>
        <h1>리액트 라우터 - 01 클라이언트 라우팅 직접 구현 - SPA</h1>
        <a className="menu-dark" href="home" onClick={handleClick}>home</a>
        <br/>
        <a className="menu" href="page1" onClick={handleClick}>page1</a>
        <br/>
        <a className="menu" href="page2" onClick={handleClick}>page2</a>
      </header>
    </>
  )
}

export default Header;