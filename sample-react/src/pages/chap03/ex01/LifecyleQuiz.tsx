import { useEffect, useState } from "react";

function LifecyleQuiz() {

const [z, setZ] = useState<number>(100);

  useEffect(() => {
    console.log("처음과 값 수정될때 실행 : " + z);
  }, [z]);

  const quiz = () => {
    setZ(200)
   }

  return <div>
    <button onClick={quiz} 
        className="bg-green-600 hover:bg-green-700 px-4 py-2 text-white">수정</button>
  </div>;
}

export default LifecyleQuiz;