import { NavLink } from "react-router";

function Header(){

return(
  <>
  <h1>리액트 라우터 - 01 클라이언트 라우팅 직접 구현 - SPA</h1>
    <NavLink className={({ isActive })=> isActive ? 'menu-dark' : 'menu'} to="/">home</NavLink>
    <br/>
    <NavLink className={({ isActive })=> isActive ? 'menu-dark' : 'menu'} to="/page1">page1</NavLink>
    <br/>
    <NavLink className={({ isActive })=> isActive ? 'menu-dark' : 'menu'} to="/page2">page2</NavLink>
  </>
);
}
export default Header;