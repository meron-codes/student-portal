import { useState, useEffect } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import axios from "axios";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/student/notifications", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setNotifications(res.data);
      } catch (err) {
        console.error("Error fetching notifications", err);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <DashboardLayout role="student">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Notifications</h1>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        {notifications.length === 0 ? (
          <p className="text-gray-600 text-center">No notifications yet.</p>
        ) : (
          <ul className="space-y-4">
            {notifications.map((n, idx) => (
              <li
                key={idx}
                className="border p-4 rounded-lg hover:bg-gray-50 transition"
              >
                <p className="font-semibold">{n.title}</p>
                <p className="text-gray-600">{n.message}</p>
                <p className="text-gray-400 text-sm">{new Date(n.date).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </DashboardLayout>
  );
}
