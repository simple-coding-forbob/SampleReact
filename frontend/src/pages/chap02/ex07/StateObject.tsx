import { useState } from "react";

interface Person {
    name: string;
    sn: number;
    id:number;
}

function StateObject() {
  const [a, setA] = useState<Person>({ name: "hong", sn: 12, id:0});
  const myUpdate = () => {
    setA({...a, id:12});
  };

  return (
    <div>
      {a.id}
      <br />
      <button
        onClick={myUpdate}
        className="bg-blue-700 hover:bg-blue-800 px-4 py-2 text-white"
      >
        값수정
      </button>
    </div>
  );
}

export default StateObject;
