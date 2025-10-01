import { Routes, Route, Navigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar"; // make sure this file exists
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
      <AdminSidebar />

      {/* Main Content */}
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
          {/* Redirect unknown paths back to dashboard */}
          <Route path="*" element={<Navigate to="" replace />} />
        </Routes>
      </main>
    </div>
  );
}
