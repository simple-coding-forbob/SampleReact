import { useState } from "react";

function Condition() {
  const [a, setA] = useState<boolean>(false);
  const [b, setB] = useState<boolean>(false);

  const update = () => {
    setA(true);
  };

  const update2 = () => {
    setB(true);
  };

  return (
    <div>
      {a && <p className="text-2xl mb-2">보이나요?</p>}
      <button
        onClick={update}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2"
      >
        수정
      </button>

      <br />
      <br />
      {b === true ? (
        <p className="text-2xl mb-2">참</p>
      ) : (
        <p className="text-2xl mb-2">거짓</p>
      )}
      <button
        onClick={update2}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2"
      >
        수정2
      </button>
    </div>
  );
}

export default Condition;