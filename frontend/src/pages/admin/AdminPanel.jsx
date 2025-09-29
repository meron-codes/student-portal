import { Link, Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import ManageTeachers from "./ManageTeachers";
import ManageStudents from "./ManageStudents";
import ManageSubjects from "./ManageSubjects";
import ManageResults from "./ManageResults";
import ManageAnnouncements from "./ManageAnnouncements";
import ManageSchedules from "./ManageSchedules";
import ManageOpportunities from "./ManageOpportunities";
import ManageFeedback from "./ManageFeedback";

export default function AdminPanel() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <h2 className="text-2xl font-bold p-4 border-b border-gray-700">
          Admin Panel
        </h2>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li><Link to="" className="block hover:text-yellow-400">Dashboard</Link></li>
            <li><Link to="teachers" className="block hover:text-yellow-400">Manage Teachers</Link></li>
            <li><Link to="students" className="block hover:text-yellow-400">Manage Students</Link></li>
            <li><Link to="subjects" className="block hover:text-yellow-400">Manage Subjects</Link></li>
            <li><Link to="results" className="block hover:text-yellow-400">Manage Results</Link></li>
            <li><Link to="announcements" className="block hover:text-yellow-400">Manage Announcements</Link></li>
            <li><Link to="schedules" className="block hover:text-yellow-400">Manage Schedules</Link></li>
            <li><Link to="opportunities" className="block hover:text-yellow-400">Manage Opportunities</Link></li>
            <li><Link to="feedback" className="block hover:text-yellow-400">Manage Feedback</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        <Routes>
          <Route index element={<AdminDashboard />} />
          <Route path="teachers" element={<ManageTeachers />} />
          <Route path="students" element={<ManageStudents />} />
          <Route path="subjects" element={<ManageSubjects />} />
          <Route path="results" element={<ManageResults />} />
          <Route path="announcements" element={<ManageAnnouncements />} />
          <Route path="schedules" element={<ManageSchedules />} />
          <Route path="opportunities" element={<ManageOpportunities />} />
          <Route path="feedback" element={<ManageFeedback />} />
          <Route path="*" element={<Navigate to="" replace />} />
        </Routes>
      </main>
    </div>
  );
}
