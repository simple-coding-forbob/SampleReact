import { useDateTime } from "../../../common/hooks/useDateTime";

function Mypage() {

  const date=useDateTime();

  return (
    <div>현재: {date}</div>
  )
}

export default Mypage