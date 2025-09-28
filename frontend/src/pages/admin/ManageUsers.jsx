import { useState, useEffect } from "react";
import api from "../../api/api";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get("/users");
        setUsers(res.data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      {users.length > 0 ? (
        <ul className="space-y-2">
          {users.map((u) => (
            <li key={u.user_id} className="p-3 border rounded">
              {u.username} — {u.role}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}
