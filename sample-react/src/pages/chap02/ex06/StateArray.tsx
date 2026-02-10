import { useState } from "react";

function StateArray() {
  // TODO: 
  const [a, setA] = useState<Array<number>>([1, 2]); 
  const myUpdate = () => {
    setA([...a, 3]);
  };

  const [b, setB] = useState<Array<string>>(["a", "b"]); 
  const myUpdate2 = () => {
    setB([...b, "c"]);
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
    </div>
  );
}

export default StateArray;
