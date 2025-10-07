import { useState, useEffect } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import axios from "axios";

export default function Results() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/student/results", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setResults(res.data);
      } catch (err) {
        console.error("Error fetching results", err);
      }
    };

    fetchResults();
  }, []);

  return (
    <DashboardLayout role="student">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Results</h1>

      <div className="bg-white p-6 rounded-2xl shadow-md overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3 text-left">Subject</th>
              <th className="p-3 text-left">Result Type</th>
              <th className="p-3 text-left">Score</th>
              <th className="p-3 text-left">Grade</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-100 transition">
                <td className="p-3">{r.subject}</td>
                <td className="p-3">{r.result_type}</td>
                <td className="p-3">{r.score}</td>
                <td className="p-3">{r.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
