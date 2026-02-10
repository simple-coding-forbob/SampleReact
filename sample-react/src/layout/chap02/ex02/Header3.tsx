import { Link } from "react-router-dom"

function Header3() {
  return (
    <div className="text-[1.5rem] text-blue-700 font-bold mb-3">
      <Link to="/form-input" className="mr-2">chap04 : 입력양식</Link> |
      <Link to="/form-input-quiz" className="ms-2">퀴즈</Link> |
      <Link to="/form-input2" className="mr-2"> 입력양식2</Link> |
      <Link to="/form-input2-quiz" className="ms-2">퀴즈</Link> |
      <Link to="/form-input3" className="mr-2"> 유효성체크</Link> |
      <Link to="/form-input3-quiz" className="ms-2">퀴즈</Link> |

    </div>
  )
}

export default Header3