<<<<<<< HEAD
import MyLink from "@pages/MyLink";

function Header() {
  return (
    <header>
      <h1>02 리액트 라우터 사용</h1>
      <MyLink to="home">home</MyLink>
      <br/>
      <MyLink to="page1">page1</MyLink>
      <br/>
      <MyLink to="page2">page2</MyLink>
    </header>
  );
=======
import { Link } from "react-router";

function Header() {
  return (
    <>
      <header>
        <h1>리액트 라우터 - 02 react-router 사용</h1>
        <Link className="menu-dark" to="/home">home</Link>
        <br/>
        <Link className="menu" to="/page1">page1</Link>
        <br/>
        <Link className="menu" to="/page2">page2</Link>
      </header>
    </>
  )
>>>>>>> upstream/main
}

export default Header;