import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="text-[1.5rem] font-bold mb-3">
      <Link to="/" className="mr-2">chap02 : 홈</Link> |
      <Link to="/variable" className="ms-2">변수</Link> |
      <Link to="/variable-quiz" className="ms-2">퀴즈</Link> |
      <Link to="/function" className="ms-2">함수</Link> |
      <Link to="/function-quiz" className="ms-2">퀴즈</Link> |
      <Link to="/state" className="ms-2">상태함수</Link> |
      <Link to="/state-quiz" className="ms-2">퀴즈</Link> |
      <Link to="/state-array" className="ms-2">상태-배열</Link> |
      <Link to="/state-array-quiz" className="ms-2">퀴즈</Link> |
      <Link to="/state-object" className="ms-2">상태-객체</Link> |
      <Link to="/state-object-quiz" className="ms-2">퀴즈</Link> |
      <Link to="/bg-color" className="ms-2">배경색</Link>
    </div>
  )
}

export default Header