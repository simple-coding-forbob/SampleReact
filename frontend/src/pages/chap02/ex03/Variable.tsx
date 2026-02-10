function Variable() {
  const hello: string = "안녕하세요";
  const a: number = 100;
  const b: number = 100.2;
  const c: Array<number> = [1, 2];
  const d: Array<string> = ["a", "b"];

  // TODO: 
  // const e : boolean = true;
  // const f : { a: number; b: number }  = {a: 1, b: 2};

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

export default Variable;
