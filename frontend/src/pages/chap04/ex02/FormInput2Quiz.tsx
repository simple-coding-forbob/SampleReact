import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { IFaq } from "../../../types/IFaq";

function FormInput2Quiz() {
  let [faq, setFaq] = useState<IFaq>({ title: "", content: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFaq({ ...faq, title: event.target.value });
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFaq({ ...faq, content: event.target.value });
  };

  const nav = useNavigate();
  const handleSubmit = () => {
    alert(faq.title + faq.content);
    nav("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="block mb-2">
          제목
        </label>
        <input
          type="text"
          value={faq.title}
          name="title"
          className="input mb-2"
          onChange={handleChange}
        />

        <label htmlFor="content" className="block mb-2">
          내용
        </label>
        <input
          type="text"
          value={faq.content}
          name="content"
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

export default FormInput2Quiz;
