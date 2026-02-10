import { useState } from "react";

function StateArrayQuiz() {
  const [z, setZ] = useState<Array<number>>([10, 20]); 
  const myQuiz = () => {
    setZ([...z, 30]);
  };

  const [y, setY] = useState<Array<string>>(["z", "y"]); 
  const myQuiz2 = () => {
    setY([...y, "x"]);
  };

  return (
    <div>
      {z}
      <br />
      <button
        onClick={myQuiz}
        className="bg-green-700 hover:bg-green-800 px-4 py-2 text-white"
      >
        값수정
      </button>
      <br />
      <br />
      {y}
      <br />
      <button
        onClick={myQuiz2}
        className="bg-green-700 hover:bg-green-800 px-4 py-2 text-white"
      >
        값수정
      </button>
    </div>
  );
}

export default StateArrayQuiz;
