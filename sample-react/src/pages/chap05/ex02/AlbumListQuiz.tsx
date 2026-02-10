import Pagination from "rc-pagination";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import constance from "../../../common/constance";
import AlbumService from "../../../services/AlbumService";
import type { IAlbum } from "../../../types/IAlbum";

const AlbumListQuiz = () => {
  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [q, setQ] = useState<string>("");
  const [_page, setPage] = useState<number>(1);
  const [totalNumber, setTotalNumber] = useState<number>(100);

  const pageChange = (_page: number) => {
    setPage(_page);
    console.log("현재 페이지:", _page);
  };

  const selectList = async () => {
    const response = await AlbumService.getAll(q, _page, constance.limit);
    setAlbums(response.data);
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
      <h1 className="text-2xl font-bold mb-6">Albums 조회</h1>

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
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="px-4 py-2 border-b">id</th>
              <th className="px-4 py-2 border-b">userId</th>
              <th className="px-4 py-2 border-b">title</th>
            </tr>
          </thead>
          <tbody>
            {albums.map((data) => (
              <tr key={data.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b text-center">
                  <Link to={"/albums-detail-quiz/" + data.id}>{data.id}</Link>
                </td>
                <td className="px-4 py-2 border-b text-center">{data.userId}</td>
                <td className="px-4 py-2 border-b">{data.title}</td>
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

export default AlbumListQuiz;
