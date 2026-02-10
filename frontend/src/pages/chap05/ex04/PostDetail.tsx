import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import messages from "../../../common/message";
import PostService from "../../../services/PostService";
import type { IPost } from "../../../types/IPost";
import postValidation from "../../../validation/postValidation";

function PostDetail() {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);

  const [post, setPost] = useState<IPost | null>(null); // null로 초기화 -> 로딩 상태 판단

  // 상세조회
  useEffect(() => {
    if (id) get(id);
  }, [id]);

  const get = async (id: number) => {
    const response = await PostService.get(id);
    setPost(response.data); // 서버 데이터 저장
    console.log(response.data);
  };

  // 수정
  const update = async (data: IPost) => {
    const response= await PostService.update(id, data);
    console.log(response.data);
    alert(messages.update);
  };

  // 삭제
  const remove = async () => {
    const response= await PostService.remove(id);
    console.log(response.data);
    alert(messages.delete);
  };

  // 서버 데이터가 준비되었을 때만 Formik 초기화
  const formik = useFormik({
    initialValues: {
      userId: post?.userId?? "",
      title: post?.title?? "",
      body: post?.body?? ""
    },
    enableReinitialize: true, // 값이 바뀌면 재갱신: 최초 null -> 서버데이터
    validationSchema: postValidation,
    onSubmit: (data: IPost) => {
      update(data);
    },
  });

  if (!post) return <div>로딩중...</div>; // 데이터 로딩 중 표시

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Albums 상세조회</h1>

      <form onSubmit={formik.handleSubmit}>
        {/* userId 입력 */}
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

        <div className="mb-4 flex gap-2">
          <button
            type="submit"
            className="btn-warning"
          >
            수정
          </button>
          <button
            type="button"
            onClick={remove}
            className="btn-danger"
          >
            삭제
          </button>
        </div>
      </form>
    </>
  );
}

export default PostDetail;
