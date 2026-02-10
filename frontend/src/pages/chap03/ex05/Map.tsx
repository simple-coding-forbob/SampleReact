function Map() {
  const depts = [
    {
      dno: 10,
      dname: "개발팀",
    },
    {
      dno: 20,
      dname: "마케팅팀",
    },
    {
      dno: 30,
      dname: "행정팀",
    },
  ];
  return (
    <table className="w-[100%] border border-gray-200">
      <thead className="bg-blue-700 text-white">
        <tr>
          <td className="px-4 py-2 border-b">부서번호</td>
          <td className="px-4 py-2 border-b">부서명</td>
        </tr>
      </thead>
      <tbody>
        {depts.map((data, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="px-4 py-2 border-b">{data.dno}</td>
            <td className="px-4 py-2 border-b">{data.dname}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Map;
