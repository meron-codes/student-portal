import React, { useEffect, useState } from "react";
import {
  getUsers,
  getStudents,
  getTeachers,
  getAnnouncements,
  getSchedules,
  getResults,
  getOpportunities,
  getFeedbacks,
} from "../../api/api";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [results, setResults] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    getUsers().then(res => setUsers(res.data)).catch(err => console.error(err));
    getStudents().then(res => setStudents(res.data)).catch(err => console.error(err));
    getTeachers().then(res => setTeachers(res.data)).catch(err => console.error(err));
    getAnnouncements().then(res => setAnnouncements(res.data)).catch(err => console.error(err));
    getSchedules().then(res => setSchedules(res.data)).catch(err => console.error(err));
    getResults().then(res => setResults(res.data)).catch(err => console.error(err));
    getOpportunities().then(res => setOpportunities(res.data)).catch(err => console.error(err));
    getFeedbacks().then(res => setFeedbacks(res.data)).catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white shadow p-4 rounded">
          <h2 className="font-semibold">Users</h2>
          <p>{users.length}</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="font-semibold">Students</h2>
          <p>{students.length}</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="font-semibold">Teachers</h2>
          <p>{teachers.length}</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="font-semibold">Announcements</h2>
          <p>{announcements.length}</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="font-semibold">Schedules</h2>
          <p>{schedules.length}</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="font-semibold">Results</h2>
          <p>{results.length}</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="font-semibold">Opportunities</h2>
          <p>{opportunities.length}</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="font-semibold">Feedbacks</h2>
          <p>{feedbacks.length}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
