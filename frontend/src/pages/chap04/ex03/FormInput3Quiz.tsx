import { useFormik } from "formik";
import type { IFaq } from "../../../types/IFaq";
import faqValidation from "../../../validation/faqValidation";

function FormInput3Quiz() {
  // TODO: 유효성 체크하기
  const formik = useFormik({
    initialValues: { title: "", content: "" },
    validationSchema: faqValidation,
    onSubmit: (data: IFaq) => {
      save(data);
    },
  });

  const save = (data: IFaq) => {
    alert("벡엔드 저장 : " + data.title);
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="title" className="block mb-2">
          제목
        </label>
        <input
          type="text"
          value={formik.values.title}
          name="title"
          className="input mb-2"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.title && formik.errors.title && (
          <div className="text-red-500">{formik.errors.title}</div>
        )}

        <label htmlFor="content" className="block mb-2">
          내용
        </label>
        <input
          type="number"
          value={formik.values.content}
          name="content"
          className="input mb-2"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.content && formik.errors.content && (
          <div className="text-red-500">{formik.errors.content}</div>
        )}
        <button type="submit" className="btn-primary">
          제출
        </button>
      </form>
    </>
  );
}

export default FormInput3Quiz;
