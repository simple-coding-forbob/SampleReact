import useIsoDate from "../../../common/hooks/useIsoDate";

function MypageQuiz() {
  const date= useIsoDate();

  return (
    <div>현재: {date}</div>
  )
}

export default MypageQuiz