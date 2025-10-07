function ResultCard({ subject, result_type, score, grade }) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white mb-4">
      <h3 className="font-bold text-lg">{subject}</h3>
      <p>Type: {result_type}</p>
      <p>Score: {score}</p>
      <p>Grade: {grade}</p>
    </div>
  );
}

export default ResultCard;
