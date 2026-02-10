import { Outlet } from "react-router-dom";
import Header from "./chap02/ex02/Header";
import Header2 from "./chap02/ex02/Header2";
import Header3 from "./chap02/ex02/Header3";
import Header4 from "./chap02/ex02/Header4";

function Layout() {
  return (
    <>
      <div className="container mx-auto mt-8 px-3">
        {/* 예제 2: 머리말 */}
        <Header />
        <Header2 />
        <Header3 />
        <Header4 />

        {/* 예제 1: 본문 */}
        <div className="mt-10">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
