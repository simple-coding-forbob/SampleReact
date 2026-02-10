import { useFormik } from "formik";
import messages from "../../../common/message";
import AlbumService from "../../../services/AlbumService";
import type { IAlbum } from "../../../types/IAlbum";
import albumValidation from "../../../validation/albumValidation";

function AddAlbumQuiz() {

  const save = async (data: IAlbum) => {
    const response= await AlbumService.insert(data);
    alert(messages.save);
    console.log(response.data);
  };

  const formik = useFormik({
    initialValues: {
      userId: "",
      title: ""
    },
    validationSchema: albumValidation,
    onSubmit: (data: IAlbum) => {
      save(data);
    },
  });

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Albums 추가</h1>

      <form onSubmit={formik.handleSubmit}>
        {/* dname 입력 */}
        <div className="mb-4">
          <label htmlFor="userId" className="block mb-1">
            userId
          </label>
          <input
            type="number"
            id="userId"
            name="userId"
            placeholder="userId"
            className="input"
            value={formik.values.userId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.userId && formik.errors.userId && (
            <div className="text-red-500">{formik.errors.userId}</div>
          )}
        </div>

        {/* title 입력 */}
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1">
            title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="title"
            className="input"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.title && formik.errors.title && (
            <div className="text-red-500">{formik.errors.title}</div>
          )}
        </div>

        {/* 버튼 */}
        <button
          type="submit"
          className="btn-primary"
        >
          저장
        </button>
      </form>
    </>
  );
}

export default AddAlbumQuiz;
