import Pagination from "rc-pagination";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import constance from "../../../common/constance";
import PostService from "../../../services/PostService";
import type { IPost } from "../../../types/IPost";

const PostList = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [q, setQ] = useState<string>("");
  const [_page, setPage] = useState<number>(1);
  const [totalNumber, setTotalNumber] = useState<number>(100);

  const pageChange = (_page: number) => {
    setPage(_page);
    console.log("현재 페이지:", _page);
  };

  const selectList = async () => {
    const response = await PostService.getAll(q, _page, constance.limit);
    setPosts(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    selectList();
  }, [_page]);

  const changeQ = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Posts 조회</h1>

      <div className="flex justify-center mb-4">
        <input
          type="text"
          className="input"
          placeholder="검색"
          value={q}
          onChange={changeQ}
        />
        <button className="btn-search" onClick={selectList}>
          검색
        </button>
      </div>

      <div>
        <table className="w-[100%] border border-gray-200">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="px-4 py-2 border-b">id</th>
              <th className="px-4 py-2 border-b">userId</th>
              <th className="px-4 py-2 border-b">title</th>
              <th className="px-4 py-2 border-b">body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((data) => (
              <tr key={data.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b text-center">
                  <Link to={"/posts-detail/" + data.id}>{data.id}</Link>
                </td>
                <td className="px-4 py-2 border-b text-center">{data.userId}</td>
                <td className="px-4 py-2 border-b">{data.title}</td>
                <td className="px-4 py-2 border-b">{data.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4">
        <Pagination
          current={_page}
          total={totalNumber}
          pageSize={constance.limit}
          onChange={pageChange}
          className="flex space-x-2"
        />
      </div>
    </>
  );
};

export default PostList;
