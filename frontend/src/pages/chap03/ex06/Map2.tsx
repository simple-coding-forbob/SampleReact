function Map2() {
  const faqs = [
    {
      fno: 10,
      title: "제목",
      content: "내용",
      order: 1,
    },
    {
      fno: 20,
      title: "제목2",
      content: "내용2",
      order: 2,
    },
    {
      fno: 30,
      title: "제목3",
      content: "내용3",
      order: 3,
    },
    {
      fno: 40,
      title: "제목4",
      content: "내용4",
      order: 4,
    },
  ];
  return (
    <table className="w-[100%] border border-gray-200">
      <thead className="bg-blue-700 text-white">
        <tr>
          <td className="px-4 py-2 border-b">faq 번호</td>
          <td className="px-4 py-2 border-b">제목</td>
          <td className="px-4 py-2 border-b">내용</td>
          <td className="px-4 py-2 border-b">순서</td>
        </tr>
      </thead>
      <tbody>
        {faqs.map((data, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="px-4 py-2 border-b">{data.fno}</td>
            <td className="px-4 py-2 border-b">{data.title}</td>
            <td className="px-4 py-2 border-b">{data.content}</td>
            <td className="px-4 py-2 border-b">{data.order}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Map2;
