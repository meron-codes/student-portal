import { useState, useEffect } from "react";
import api from "../../api/api";

export default function ManageAnnouncements() {   // 👈 default export
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState("");

  // Fetch announcements
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await api.get("/announcements");
        setAnnouncements(res.data);
      } catch (err) {
        console.error("Error fetching announcements:", err);
      }
    };
    fetchAnnouncements();
  }, []);

  // Add new announcement
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newAnnouncement.trim()) return;

    try {
      const res = await api.post("/announcements", {
        message: newAnnouncement,
      });
      setAnnouncements([...announcements, res.data]);
      setNewAnnouncement("");
    } catch (err) {
      console.error("Error adding announcement:", err);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Manage Announcements</h1>

      {/* Form */}
      <form onSubmit={handleAdd} className="flex gap-2 mb-6">
        <input
          type="text"
          value={newAnnouncement}
          onChange={(e) => setNewAnnouncement(e.target.value)}
          placeholder="Enter new announcement"
          className="flex-1 border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </form>

      {/* List */}
      {announcements.length > 0 ? (
        <ul className="space-y-3">
          {announcements.map((a) => (
            <li
              key={a.announcement_id}
              className="p-3 border rounded bg-gray-50 shadow-sm"
            >
              {a.message}
            </li>
          ))}
        </ul>
      ) : (
        <p>No announcements found.</p>
      )}
    </div>
  );
}
