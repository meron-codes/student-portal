import { useState, useEffect } from "react";
import api from "../../api/api";

export default function MyResults() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await api.get("/results/me");
        setResults(res.data);
      } catch (err) {
        console.error("Error fetching results:", err);
      }
    };
    fetchResults();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">My Results</h1>
      {results.length > 0 ? (
        <ul className="space-y-2 mt-4">
          {results.map((r) => (
            <li key={r.result_id} className="p-3 border rounded">
              {r.subject} — Score: {r.score}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results available.</p>
      )}
    </div>
  );
}
