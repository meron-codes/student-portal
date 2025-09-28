import { useState, useEffect } from "react";
import api from "../../api/api";

export default function MySchedule() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const res = await api.get("/schedules/me");
        setSchedule(res.data);
      } catch (err) {
        console.error("Error fetching schedule:", err);
      }
    };
    fetchSchedule();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">My Schedule</h1>
      {schedule.length > 0 ? (
        <ul className="space-y-2 mt-4">
          {schedule.map((s) => (
            <li key={s.schedule_id} className="p-3 border rounded">
              {s.day} — {s.subject} ({s.time})
            </li>
          ))}
        </ul>
      ) : (
        <p>No schedule assigned.</p>
      )}
    </div>
  );
}
