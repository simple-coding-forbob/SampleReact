import { useEffect, useState } from "react";
import messages from "../../../common/message";
import AlbumService from "../../../services/AlbumService";
import type { IAlbum } from "../../../types/IAlbum";

const AlbumQuiz = () => {
  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [q, setQ] = useState<string>("");

  const selectList = async () => {
    try {
      const response = await AlbumService.getAllNoPage(q);
      setAlbums(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      const msg = messages.contactAdmin;
      alert("[서버 오류] : " + msg);
    }
  };

  useEffect(() => {
    selectList();
  }, []);

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
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="px-4 py-2 border-b">userId</th>
              <th className="px-4 py-2 border-b">title</th>
            </tr>
          </thead>
          <tbody>
            {albums.map((data) => (
              <tr key={data.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b text-center">
                  {data.userId}
                </td>
                <td className="px-4 py-2 border-b">{data.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AlbumQuiz;
