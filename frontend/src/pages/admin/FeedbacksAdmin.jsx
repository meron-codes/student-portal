import { useState, useEffect } from "react";
import api from "../../api/api";

export default function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await api.get("/feedback");
        setFeedbacks(res.data);
      } catch (err) {
        console.error("Error fetching feedbacks:", err);
      }
    };
    fetchFeedbacks();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">View Feedbacks</h1>
      {feedbacks.length > 0 ? (
        <ul className="space-y-2">
          {feedbacks.map((f) => (
            <li key={f.feedback_id} className="p-3 border rounded">
              From Student {f.student_id}: {f.message}
            </li>
          ))}
        </ul>
      ) : (
        <p>No feedback available.</p>
      )}
    </div>
  );
}
