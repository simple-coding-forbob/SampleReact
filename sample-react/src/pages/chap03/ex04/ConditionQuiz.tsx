import { useState } from "react";

function ConditionQuiz() {
  const [z, setZ] = useState<boolean>(false);
  const update = () => {
    setZ(true);
  };

  const [y, setY] = useState<boolean>(false);

  const update2 = () => {
    setY(true);
  };

  return (
    <div>
      {z && <p className="text-2xl mb-2">퀴즈?</p>}
      <button
        onClick={update}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2"
      >
        수정
      </button>

      <br />
      <br />
      {y === true ? (
        <p className="text-2xl mb-2">참</p>
      ) : (
        <p className="text-2xl mb-2">거짓</p>
      )}
      <button
        onClick={update2}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2"
      >
        수정2
      </button>
    </div>
  );
}

export default ConditionQuiz;
