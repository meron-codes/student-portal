import { useState, useEffect } from "react";

export default function ManageAnnouncements() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Fetch announcements from backend
  useEffect(() => {
    async function fetchAnnouncements() {
      try {
        setLoading(true);
        setError("");
        const res = await fetch("http://localhost:5000/api/announcements"); // replace with your endpoint
        if (!res.ok) throw new Error("Failed to fetch announcements");
        const data = await res.json();
        setAnnouncements(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchAnnouncements();
  }, []);

  // Add or update announcement
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = editingId ? "PUT" : "POST";
      const url = editingId
        ? `http://localhost:5000/api/announcements/${editingId}`
        : "http://localhost:5000/api/announcements";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
      if (!res.ok) throw new Error("Failed to save announcement");

      const saved = await res.json();
      if (editingId) {
        setAnnouncements(
          announcements.map((a) => (a.id === editingId ? saved : a))
        );
      } else {
        setAnnouncements([saved, ...announcements]);
      }

      setTitle("");
      setContent("");
      setEditingId(null);
    } catch (err) {
      alert(err.message);
    }
  };

  // Delete announcement
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this announcement?"))
      return;

    try {
      const res = await fetch(`http://localhost:5000/api/announcements/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete announcement");
      setAnnouncements(announcements.filter((a) => a.id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  // Edit announcement
  const handleEdit = (announcement) => {
    setTitle(announcement.title);
    setContent(announcement.content);
    setEditingId(announcement.id);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Manage Announcements</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-2">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="w-full p-2 border rounded"
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 transition"
        >
          {editingId ? "Update" : "Add"} Announcement
        </button>
      </form>

      {loading && <p>Loading announcements...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && announcements.length === 0 && <p>No announcements yet.</p>}

      {/* List */}
      <ul className="space-y-4">
        {announcements.map((a) => (
          <li
            key={a.id}
            className="p-4 bg-white rounded shadow flex justify-between items-start"
          >
            <div>
              <h3 className="font-semibold text-lg">{a.title}</h3>
              <p className="text-gray-700">{a.content}</p>
              <p className="text-gray-400 text-sm">
                {new Date(a.created_at).toLocaleString()}
              </p>
            </div>
            <div className="flex flex-col gap-2 ml-4">
              <button
                onClick={() => handleEdit(a)}
                className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-400 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(a.id)}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-500 transition"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
