import { Link } from "react-router-dom"

function Header2() {
  return (
    <div className="text-[1.5rem] text-blue-700 font-bold mb-3">
      <Link to="/lifecycle" className="mr-2">chap03 : 라이프사이클</Link> |
      <Link to="/lifecycle-quiz" className="ms-2">퀴즈</Link> |
      <Link to="/image" className="ms-2">이미지</Link> |
      <Link to="/image-quiz" className="ms-2">퀴즈</Link> |
      <Link to="/props" className="ms-2">Props</Link> |
      <Link to="/props-quiz" className="ms-2">퀴즈</Link> |
      <Link to="/condition" className="ms-2">조건문</Link> |
      <Link to="/condition-quiz" className="ms-2">퀴즈</Link> |
      <Link to="/map" className="ms-2">반복문</Link> |
      <Link to="/map-quiz" className="ms-2">퀴즈</Link> |
      <Link to="/map2" className="ms-2">반복문2</Link> |
      <Link to="/map2-quiz" className="ms-2">퀴즈</Link> |
      <Link to="/mypage" className="ms-2">mypage</Link> |
      <Link to="/mypage-quiz" className="ms-2">퀴즈</Link> |
    </div>
  )
}

export default Header2