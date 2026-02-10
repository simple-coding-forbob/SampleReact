import axios from "axios";
import messages from "./message";

// TODO: Rest API 벡엔드 기본주소 저장해 놓기
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// TODO: 공통 응답 인터셉터, 모든 axios 에러는 여기로 처리합니다.
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);
    const msg = messages.contactAdmin;
    alert("[서버 오류] : " + msg);

    return Promise.reject(error);
  }
);

export default axiosInstance;
