import { useEffect, useState } from "react";
import api from "../../api/api"; // axios instance for backend requests

export default function FeedbackStudent() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [newFeedback, setNewFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch feedbacks from backend
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        setLoading(true);
        const res = await api.get("/feedback/student"); // backend route
        setFeedbackList(res.data);
      } catch (err) {
        console.error("Error fetching feedback:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  // Handle submit new feedback
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newFeedback.trim()) return;

    try {
      const res = await api.post("/feedback", { message: newFeedback });
      setFeedbackList([...feedbackList, res.data]); // add new feedback to UI
      setNewFeedback("");
    } catch (err) {
      console.error("Error submitting feedback:", err);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Feedback</h1>

      {/* Feedback submission form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={newFeedback}
          onChange={(e) => setNewFeedback(e.target.value)}
          placeholder="Write your feedback..."
          className="w-full border p-3 rounded-lg mb-2"
          rows="3"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Submit Feedback
        </button>
      </form>

      {/* Feedback list */}
      <h2 className="text-xl font-semibold mb-2">Previous Feedback</h2>
      {loading ? (
        <p>Loading feedback...</p>
      ) : feedbackList.length > 0 ? (
        <ul className="space-y-3">
          {feedbackList.map((fb) => (
            <li
              key={fb.feedback_id}
              className="p-3 border rounded-lg shadow-sm bg-gray-50"
            >
              <p className="text-gray-800">{fb.message}</p>
              <span className="text-sm text-gray-500">
                {new Date(fb.created_at).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No feedback yet.</p>
      )}
    </div>
  );
}
