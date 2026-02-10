function FunctionQuiz() {
  const myQuiz = (): void => {
    alert("안녕");
  };

  return <div>
    <button onClick={myQuiz} className="bg-green-700 hover:bg-green-800 px-4 py-2 text-white">클릭</button>
  </div>;
}

export default FunctionQuiz;
