function VariableQuiz() {
  const hello = "hello";
  const a: number = 1000;
  const b: number = 1000.2;
  const c: Array<number> = [10, 20];
  const d: Array<string> = ["A", "B"];

  return (
    <div>
      <h1>{hello}</h1>
      <p>{a}</p>
      <p>{b}</p>
      <p>{c}</p>
      <p>{d}</p>
    </div>
  );
}

export default VariableQuiz;
