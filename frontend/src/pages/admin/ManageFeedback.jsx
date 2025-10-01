import { useEffect, useState } from "react";

export default function ManageFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch feedbacks from backend
  useEffect(() => {
    async function fetchFeedbacks() {
      try {
        setLoading(true);
        setError("");
        const res = await fetch("http://localhost:5000/api/feedbacks"); // replace with your endpoint
        if (!res.ok) throw new Error("Failed to fetch feedbacks");
        const data = await res.json();
        setFeedbacks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchFeedbacks();
  }, []);

  // Delete feedback
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this feedback?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/feedbacks/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete feedback");
      setFeedbacks(feedbacks.filter((fb) => fb.id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Manage Feedback</h1>

      {loading && <p>Loading feedbacks...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && feedbacks.length === 0 && <p>No feedbacks found.</p>}

      <ul className="space-y-4">
        {feedbacks.map((fb) => (
          <li key={fb.id} className="p-4 bg-white rounded-xl shadow-md flex justify-between items-center">
            <div>
              <p className="font-semibold">{fb.user_name || "Anonymous"}</p>
              <p className="text-gray-600">{fb.message}</p>
              <p className="text-gray-400 text-sm">{new Date(fb.created_at).toLocaleString()}</p>
            </div>
            <button
              onClick={() => handleDelete(fb.id)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
