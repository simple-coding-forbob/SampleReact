import { useEffect, useState } from "react";

function Lifecyle() {

const [a, setA] = useState<number>(1);

  useEffect(() => {
    console.log("mount 단계: 최초 1번 화면이 뜰때 실행");
  }, []);

  useEffect(() => {
    console.log("처음과 값 수정될때 실행 : " + a);
  }, [a]);

  const update = () => { 
    setA(2)
   }

  return <div>
    <button onClick={update} 
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white">수정</button>
  </div>;
}

export default Lifecyle;
