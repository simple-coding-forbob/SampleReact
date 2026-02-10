import { useState } from "react";

function FormInput() {
  let [name, setName] = useState<string>("");

  const chName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const save = () => {
    alert(name);
  };

  return (
    <>
      <form>
        <label htmlFor="name" className="block mb-2">이름</label>
        <input type="text" 
              value={name} 
              name="name" 
              className="input  mb-2"
              onChange={chName} />
        <button 
              type="submit"
              className="btn-primary"
              onClick={save}>제출</button>
      </form>
    </>
  );
}

export default FormInput;