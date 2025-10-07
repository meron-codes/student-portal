import { useState, useEffect } from "react";
import axios from "axios";

export default function EditResultModal({ resultId, onClose, onUpdated }) {
  const [score, setScore] = useState("");

  useEffect(() => {
    setScore(""); // reset score when modal opens
  }, [resultId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/admin/edit-result/${resultId}`, {
        score: parseFloat(score),
      });
      onUpdated();
      onClose();
    } catch (err) {
      console.error("Error updating result", err);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
        <h2 className="text-lg font-bold mb-4">Edit Result</h2>

        <form onSubmit={handleUpdate}>
          <input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            placeholder="New Score"
            className="border w-full p-2 rounded-lg mb-4"
            required
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded-lg"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
