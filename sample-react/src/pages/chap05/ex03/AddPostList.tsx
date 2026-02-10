import { useFormik } from "formik";
import messages from "../../../common/message";
import PostService from "../../../services/PostService";
import type { IPost } from "../../../types/IPost";
import postValidation from "../../../validation/postValidation";

function AddPostList() {

  const save = async (data: IPost) => {
    const response= await PostService.insert(data);
    alert(messages.save);
    console.log(response.data)
  };

  const formik = useFormik({
    initialValues: {
      userId: "",
      title: "",
      body: "",
    },
    validationSchema: postValidation,
    onSubmit: (data: IPost) => {
      save(data);
    },
  });

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Posts 추가</h1>

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

        {/* body 입력 */}
        <div className="mb-4">
          <label htmlFor="body" className="block mb-1">
            body
          </label>
          <input
            type="text"
            id="body"
            name="body"
            placeholder="body"
            className="input"
            value={formik.values.body}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.body && formik.errors.body && (
            <div className="text-red-500">{formik.errors.body}</div>
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

export default AddPostList;
