import { useState, useEffect } from "react";
import api from "../../api/api";

export default function ManageSchedules() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const res = await api.get("/schedules");
        setSchedules(res.data);
      } catch (err) {
        console.error("Error fetching schedules:", err);
      }
    };
    fetchSchedules();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Schedules</h1>
      {schedules.length > 0 ? (
        <ul className="space-y-2">
          {schedules.map((s) => (
            <li key={s.schedule_id} className="p-3 border rounded">
              Grade: {s.grade_level} | Day: {s.day} | Subject: {s.subject}
            </li>
          ))}
        </ul>
      ) : (
        <p>No schedules found.</p>
      )}
    </div>
  );
}
