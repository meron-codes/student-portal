import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/admin/stats"); // your backend stats endpoint
        if (!response.ok) throw new Error("Failed to fetch stats");

        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading dashboard...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error: {error}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow p-6 rounded">
          <h2 className="text-xl font-semibold">Total Students</h2>
          <p className="text-2xl mt-2">{stats.totalStudents}</p>
        </div>
        <div className="bg-white shadow p-6 rounded">
          <h2 className="text-xl font-semibold">Total Teachers</h2>
          <p className="text-2xl mt-2">{stats.totalTeachers}</p>
        </div>
        <div className="bg-white shadow p-6 rounded">
          <h2 className="text-xl font-semibold">Total Announcements</h2>
          <p className="text-2xl mt-2">{stats.totalAnnouncements}</p>
        </div>
        <div className="bg-white shadow p-6 rounded">
          <h2 className="text-xl font-semibold">Total Subjects</h2>
          <p className="text-2xl mt-2">{stats.totalSubjects}</p>
        </div>
        <div className="bg-white shadow p-6 rounded">
          <h2 className="text-xl font-semibold">Total Opportunities</h2>
          <p className="text-2xl mt-2">{stats.totalOpportunities}</p>
        </div>
        <div className="bg-white shadow p-6 rounded">
          <h2 className="text-xl font-semibold">Total Feedbacks</h2>
          <p className="text-2xl mt-2">{stats.totalFeedbacks}</p>
        </div>
      </div>
    </div>
  );
}
