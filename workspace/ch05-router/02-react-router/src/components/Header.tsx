import { Link } from "react-router";

function Header(){

return(
  <>
  <h1>리액트 라우터 - 01 클라이언트 라우팅 직접 구현 - SPA</h1>
    <Link className="menu-dark" to="/home">home</Link>
    <br/>
    <Link className="menu" to="/page1">page1</Link>
    <br/>
    <Link className="menu" to="/page2">page2</Link>
  </>
);
}
export default Header;