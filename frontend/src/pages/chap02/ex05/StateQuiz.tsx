import { useState } from "react";

function StateQuiz() {
  const [z, setZ] = useState<number>(100); 
  const myQuiz = (): void => {
    setZ(200);
  };

  const [y, setY] = useState<string>("hi");
  const myQuiz2 = (): void => {
    setY("hello");
  };

  const [x, setX] = useState<boolean>(true);
  const color: string = x === true ? "bg-blue-600" : "bg-red-600";

  const myQuiz3 = (): void => {
    setX(false);
  };

  return (
    <div>
      {z}
      <br />
      <button
        onClick={myQuiz}
        className="bg-green-700 hover:bg-green-800 px-4 py-2 text-white"
      >
        클릭
      </button>
      <br />
      <br />
      {y}
      <br />
      <button
        onClick={myQuiz2}
        className="bg-green-700 hover:bg-green-800 px-4 py-2 text-white"
      >
        클릭
      </button>
      <br />
      <br />
      <h1 className={`${color} text-white`}>색깔바뀜</h1>
      <br />
      <button
        onClick={myQuiz3}
        className="bg-blue-700 hover:bg-blue-800 px-4 py-2 text-white"
      >
        색수정3
      </button>
    </div>
  );
}

export default StateQuiz;
