import { useFormik } from "formik";
import type { IMember } from "../../../types/IMember";
import memberValidation from "../../../validation/memberValidation";

function FormInput3() {
  // TODO: 유효성 체크하기
  const formik = useFormik({
    initialValues: { name: "", age: 0 },
    validationSchema: memberValidation,
    onSubmit: (data: IMember) => {
      save(data);
    },
  });

  const save = (data: IMember) => {
    alert(data.name+data.age);
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name" className="block mb-2">
          이름
        </label>
        <input
          type="text"
          value={formik.values.name}
          name="name"
          className="input mb-2"
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
          value={formik.values.age}
          name="age"
          className="input mb-2"
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
