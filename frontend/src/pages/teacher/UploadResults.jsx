import { useState } from "react";
import api from "../../api/api";

export default function UploadResults() {
  const [studentId, setStudentId] = useState("");
  const [subjectId, setSubjectId] = useState("");
  const [score, setScore] = useState("");
  const [status, setStatus] = useState("");

  const handleUpload = async () => {
    try {
      await api.post("/results", { student_id: studentId, subject_id: subjectId, score });
      setStatus("Result uploaded successfully!");
      setStudentId("");
      setSubjectId("");
      setScore("");
    } catch (err) {
      setStatus("Error uploading result.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Upload Results</h1>
      <input
        type="text"
        placeholder="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        className="border p-2 rounded w-full mt-2"
      />
      <input
        type="text"
        placeholder="Subject ID"
        value={subjectId}
        onChange={(e) => setSubjectId(e.target.value)}
        className="border p-2 rounded w-full mt-2"
      />
      <input
        type="number"
        placeholder="Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        className="border p-2 rounded w-full mt-2"
      />
      <button
        onClick={handleUpload}
        className="mt-3 px-4 py-2 bg-green-600 text-white rounded"
      >
        Upload
      </button>
      {status && <p className="mt-2">{status}</p>}
    </div>
  );
}
