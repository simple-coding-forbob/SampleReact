import axios from "axios";
import axiosInstance from "../common/axiosInstance";
import type { IAlbum } from "../types/IAlbum";

// 전체 조회(페이징없음)
const getAllNoPage = (q: string) => {
  return axios.get("https://jsonplaceholder.typicode.com/albums", {
    params: { q },
  });
};

// 전체 조회
const getAll = (q: string, _page: number, _limit: number) => {
  return axiosInstance.get("/albums", {
    params: { q, _page, _limit },
  });
};

// 저장함수
const insert = (data: IAlbum) => {
  return axiosInstance.post("/albums", data);
};

// 상세 조회
const get = (id: number) => {
  return axiosInstance.get(`/albums/${id}`);
};

// 수정함수
const update = (id: number, data: IAlbum) => {
  return axiosInstance.put(`/albums/${id}`, data);
};

// 삭제함수
const remove = (id: number) => {
  return axiosInstance.delete(`/albums/${id}`);
};

const AlbumService = {
  getAllNoPage,
  getAll,
  get,
  insert,
  update,
  remove,
};

export default AlbumService;
