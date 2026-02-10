function MapQuiz() {
  const emps = [
    {
      eno: 8000,
      ename: "홍길동",
    },
    {
      eno: 8001,
      ename: "장길산",
    },
    {
      eno: 8002,
      ename: "임꺽정",
    },
  ];
  return (
    <table className="w-[100%] border border-gray-200">
      <thead className="bg-blue-700 text-white">
        <tr>
          <td className="px-4 py-2 border-b">사원번호</td>
          <td className="px-4 py-2 border-b">사원명</td>
        </tr>
      </thead>
      <tbody>
        {emps.map((data, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="px-4 py-2 border-b">{data.eno}</td>
            <td className="px-4 py-2 border-b">{data.ename}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MapQuiz;
