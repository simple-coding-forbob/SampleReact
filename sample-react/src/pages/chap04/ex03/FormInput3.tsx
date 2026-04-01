import { useFormik } from "formik";
import memberValidation from "../../../validation/memberValidation";

interface IMember {
  name: string;
  age: number | string;
}

function FormInput3() {
  // TODO: 유효성 체크하기
  //   const 변수 = useFormik({
  //   initialValues: { name별명1: "", name별명2: 0 },
  //   validationSchema: 규칙파일명,
  //   onSubmit: (data: 인터페이스) => {
  //     함수(data)
  //   },
  // });

  const formik = useFormik({
    initialValues: { name: "", age: 0 },
    validationSchema: memberValidation,
    onSubmit: (data: IMember) => {
      save(data);
    },
  });

  const save = (data: IMember) => {
    alert(data.name + data.age);
  };

  return (
    <>
      <form onSubmit={formik.handleChange}>
        <label htmlFor="name" className="block mb-2">
          이름
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="input mb-2"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="text-red-500">{formik.errors.name}</div>
        )}

        <label htmlFor="age" className="block mb-2">
          나이
        </label>
        <input
          type="number"
          id="age"
          name="age"
          className="input mb-2"
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.age && formik.errors.age && (
          <div className="text-red-500">{formik.errors.age}</div>
        )}
        <button type="submit" className="btn-primary">
          제출
        </button>
      </form>
    </>
  );
}

export default FormInput3;
