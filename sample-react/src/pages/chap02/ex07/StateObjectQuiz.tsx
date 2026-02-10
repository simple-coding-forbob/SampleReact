import { useState } from "react";

interface People {
    name: string;
    sn: number;
    no:number;
}

function StateObjectQuiz() {
  const [z, setZ] = useState<People>({ name: "jang", sn: 1100, no:0});
  const myUpdate = () => {
    setZ({...z, no:100});
  };

  return (
    <div>
      {z.no}
      <br />
      <button
        onClick={myUpdate}
        className="bg-green-700 hover:bg-green-800 px-4 py-2 text-white"
      >
        값수정
      </button>
    </div>
  );
}

export default StateObjectQuiz;