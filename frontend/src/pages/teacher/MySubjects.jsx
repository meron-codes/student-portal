import { useState, useEffect } from "react";
import api from "../../api/api";

export default function TeacherDashboard() {
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const res = await api.get("/teachers/me");
        setTeacher(res.data);
      } catch (err) {
        console.error("Error fetching teacher data:", err);
      }
    };
    fetchTeacher();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
      {teacher ? (
        <div className="mt-4 p-4 border rounded">
          <p>Name: {teacher.name}</p>
          <p>Subjects: {teacher.subjects?.join(", ")}</p>
        </div>
      ) : (
        <p>Loading teacher info...</p>
      )}
    </div>
  );
}
