function Map2Quiz() {
  const qnas = [
    {
      qno: 1,
      question: "질문",
      questioner: "질문자",
      answer: "답변",
      answerer: "답변자",
    },
    {
      qno: 2,
      question: "질문2",
      questioner: "질문자2",
      answer: "답변2",
      answerer: "답변자2",
    },
    {
      qno: 3,
      question: "질문3",
      questioner: "질문자3",
      answer: "답변3",
      answerer: "답변자3",
    },
    {
      qno: 4,
      question: "질문4",
      questioner: "질문자4",
      answer: "답변4",
      answerer: "답변자4",
    },
  ];
  return (
    <table className="w-[100%] border border-gray-200">
      <thead className="bg-blue-700 text-white">
        <tr>
          <td className="px-4 py-2 border-b">질문번호</td>
          <td className="px-4 py-2 border-b">질문</td>
          <td className="px-4 py-2 border-b">질문자</td>
          <td className="px-4 py-2 border-b">답변</td>
          <td className="px-4 py-2 border-b">답변자</td>
        </tr>
      </thead>
      <tbody>
        {qnas.map((data, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="px-4 py-2 border-b">{data.qno}</td>
            <td className="px-4 py-2 border-b">{data.question}</td>
            <td className="px-4 py-2 border-b">{data.questioner}</td>
            <td className="px-4 py-2 border-b">{data.answer}</td>
            <td className="px-4 py-2 border-b">{data.answerer}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Map2Quiz;