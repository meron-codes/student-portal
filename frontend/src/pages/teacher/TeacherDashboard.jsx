import React, { useEffect, useState } from "react";
import { getSubjects, getFeedbacks } from "../../api";

const TeacherDashboard = () => {
  const [subjects, setSubjects] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    getSubjects().then(res => setSubjects(res.data)).catch(err => console.error(err));
    getFeedbacks().then(res => setFeedbacks(res.data)).catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Teacher Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white shadow p-4 rounded">
          <h2 className="font-semibold">My Subjects</h2>
          <ul>
            {subjects.map(s => <li key={s.subject_id}>{s.name}</li>)}
          </ul>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="font-semibold">Feedbacks</h2>
          <ul>
            {feedbacks.map(f => <li key={f.feedback_id}>{f.message}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
