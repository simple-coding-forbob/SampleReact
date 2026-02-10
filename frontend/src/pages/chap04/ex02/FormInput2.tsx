import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { IMember } from "../../../types/IMember";

function FormInput2() {
  let [member, setMember] = useState<IMember>({ name: "", age: 0 });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMember({...member, name: event.target.value});
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMember({...member, age: event.target.value});
  };

  const nav = useNavigate();
  const handleSubmit = () => {
    alert(member.name + member.age);
    nav("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="block mb-2">
          이름
        </label>
        <input
          type="text"
          value={member.name}
          name="name"
          className="input mb-2"
          onChange={handleChange}
        />

        <label htmlFor="age" className="block mb-2">
          나이
        </label>
        <input
          type="number"
          value={member.age}
          name="age"
          className="input mb-2"
          onChange={handleChange2}
        />
        <button type="submit" className="btn-primary">
          제출
        </button>
      </form>
    </>
  );
}

export default FormInput2;
