// src/pages/auth/LoginView.tsx
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../stores/useAuthStore";
import authValidation from "../../../validation/authValidation";

function LoginView() {
  const { login } = useAuthStore();
  const nav = useNavigate();

  const handleLogin = async () => {
    const jwt={accessToken:"1234567890"};
    // localStorage.setItem("jwt", "1234567890");
    // const loggedIn=true;
    login(jwt);
    nav("/");
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: authValidation,
    onSubmit: handleLogin,
  });

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-5xl rounded-lg flex">
        {/* 이미지 영역 */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
          <img
            src="https://placehold.co/600x400"
            loading="lazy"
            alt="로그인"
            className="w-full h-full object-contain"
          />
        </div>

        {/* 로그인 폼 영역 */}
        <div className="w-full lg:w-1/2 p-8">
          <h3 className="text-4xl font-bold mb-6 text-center">simple-coding</h3>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* 이메일 */}
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                이메일
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="이메일을 넣기"
                className="input"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-600 text-sm mt-1">
                  {formik.errors.email}
                </div>
              )}
            </div>

            {/* 비밀번호 */}
            <div>
              <label htmlFor="password" className="block mb-1 font-medium">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="패스워드 넣기"
                className="input"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-600 text-sm mt-1">
                  {formik.errors.password}
                </div>
              )}
            </div>

            {/* 로그인 버튼 */}
            <button
              type="submit"
              className="btn-primary"
            >
              Login
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default LoginView;
