import axiosInstance from '../common/axiosInstance';
import type { IPost } from '../types/IPost';

// 전체 조회(페이징없음)
const getAllNoPage = (q: string) => {
  return axiosInstance.get("/posts",{
    params: {q}
  });
};

// 전체 조회
const getAll = (q: string, _page: number, _limit: number) => {
  return axiosInstance.get("/posts", {
    params: {q, _page, _limit}
  });
};

// 저장함수
const insert = (data: IPost) => {
  return axiosInstance.post("/posts", data);
};

// 상세 조회
const get = (id: number) => {
  return axiosInstance.get(`/posts/${id}`);
};

// 수정함수
const update = (id: number, data: IPost) => {
  return axiosInstance.put(`/posts/${id}`, data);
};

// 삭제함수
const remove = (id: number) => {
  return axiosInstance.delete(`/posts/${id}`);
};

const PostService = {
    getAllNoPage,
    getAll,
    get,
    insert,
    update,
    remove
}

export default PostService;