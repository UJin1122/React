import Header from "@components/Header";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/* 자식 컴포넌트로 대체될 영역 */}
    </>
  );
}

export default Layout;