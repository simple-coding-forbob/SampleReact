import { useState } from "react";

function State() {
  const [a, setA] = useState<number>(10); 
  const myUpdate = () => {
    setA(20);
  };

  const [b, setB] = useState<string>("안녕");
  const myUpdate2 = () => {
    setB("안녕하세요");
  };

  const [c, setC] = useState<boolean>(true);
  const color: string = c === true ? "bg-orange-600" : "bg-yellow-600";

  const myUpdate3 = () => {
    setC(false);
  };

  return (
    <div>
      {a}
      <br />
      <button
        onClick={myUpdate}
        className="bg-blue-700 hover:bg-blue-800 px-4 py-2 text-white"
      >
        값수정
      </button>
      <br />
      <br />
      {b}
      <br />
      <button
        onClick={myUpdate2}
        className="bg-blue-700 hover:bg-blue-800 px-4 py-2 text-white"
      >
        값수정2
      </button>
      <br />
      <br />
      <h1 className={`${color} text-white`}>색깔바뀜</h1>
      <br />
      <button
        onClick={myUpdate3}
        className="bg-blue-700 hover:bg-blue-800 px-4 py-2 text-white"
      >
        색수정3
      </button>
    </div>
  );
}

export default State;
