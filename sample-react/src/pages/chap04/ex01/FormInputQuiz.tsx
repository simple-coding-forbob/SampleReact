import { useState } from "react";

function FormInputQuiz() {
  let [id, setId] = useState<string>("");

  const chId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const save = () => {
    alert(id);
  };

  return (
    <>
      <form>
        <label htmlFor="id" className="block mb-2">아이디</label>
        <input type="text" className="input mb-2" value={id} name="name" onChange={chId} />
        <button type="submit" className="btn-primary" onClick={save}>제출</button>
      </form>
    </>
  );
}

export default FormInputQuiz;