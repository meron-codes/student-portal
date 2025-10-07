import { useState, useEffect } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import axios from "axios";
import EditResultModal from "./EditResultModal";

export default function ResultsList() {
  const [results, setResults] = useState([]);
  const [editingResult, setEditingResult] = useState(null); // result being edited

  // Fetch all results from backend
  const fetchResults = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/admin/results", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setResults(res.data);
    } catch (err) {
      console.error("Error fetching results:", err);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <DashboardLayout role="admin">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">All Results</h1>

      <div className="bg-white p-6 rounded-2xl shadow-md overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3 text-left">Student ID</th>
              <th className="p-3 text-left">Subject</th>
              <th className="p-3 text-left">Result Type</th>
              <th className="p-3 text-left">Score</th>
              <th className="p-3 text-left">Grade</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-100 transition">
                <td className="p-3">{r.student_id}</td>
                <td className="p-3">{r.subject}</td>
                <td className="p-3">{r.result_type}</td>
                <td className="p-3">{r.score}</td>
                <td className="p-3">{r.grade}</td>
                <td className="p-3">
                  <button
                    onClick={() => setEditingResult(r)}
                    className="px-3 py-1 bg-yellow-400 rounded hover:bg-yellow-500 text-black"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editingResult && (
        <EditResultModal
          resultId={editingResult.id} // adjust field according to your backend
          onClose={() => setEditingResult(null)}
          onUpdated={fetchResults} // refresh table after edit
        />
      )}
    </DashboardLayout>
  );
}
