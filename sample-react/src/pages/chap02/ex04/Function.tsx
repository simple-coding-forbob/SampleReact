

function Function() {
  const myClick = (): void => {
    alert("안녕하세요");
  };

  // TODO: 
  let a=10;
  const myUpdate = () => { a=20; }

  return <div>
    <button onClick={myClick} className="bg-blue-700 hover:bg-blue-800 px-4 py-2 text-white">클릭</button>
    <br />
    {a}
    <br />
    <button onClick={myUpdate} className="bg-blue-700 hover:bg-blue-800 px-4 py-2 text-white">값수정</button>
  </div>;
}

export default Function;
