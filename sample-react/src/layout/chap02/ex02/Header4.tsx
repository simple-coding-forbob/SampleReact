import { Link } from "react-router-dom";

function Header4() {

  // const { loggedIn, logout, signedIn, signout } = useAuthStore();
  // const nav = useNavigate();

  // const logoutMenu = () => {
  //   logout();
  //   nav("/login");
  // };

  // const signoutMenu = () => {
  //   signout();
  //   nav("/signin-quiz");
  // };

  return (
    <div className="text-[1.5rem] text-blue-700 font-bold mb-3">
      <Link to="/posts-nopage" className="mr-2">chap05 : Posts 게시판(noPage)</Link> |
      <Link to="/albums-nopage-quiz" className="ms-2">퀴즈</Link> |
      <Link to="/posts" className="mr-2"> Posts 게시판</Link> |
      <Link to="/albums-quiz" className="ms-2">퀴즈</Link> |
      <Link to="/add-posts" className="mr-2"> 추가 Posts</Link> |
      <Link to="/add-albums-quiz" className="ms-2">퀴즈</Link> |
      {/* {!loggedIn && <Link to="/login" className="mr-2"> 로그인</Link>} | 
      {!signedIn && <Link to="/signin-quiz" className="mr-2"> signin</Link>}
      {loggedIn && <button onClick={logoutMenu}>로그아웃</button>} | 
      {signedIn && <button onClick={signoutMenu}>signout</button>} */}
    </div>
  )
}

export default Header4