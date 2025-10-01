import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Guest pages
import Home from "./pages/guest/Home";
import About from "./pages/guest/About";
import Contact from "./pages/guest/Contact";
import Login from "./pages/guest/Login";
import ForgotPassword from "./pages/ForgotPassword"; // NEW
import ResetPassword from "./pages/ResetPassword"; // NEW

// Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageAnnouncements from "./pages/admin/ManageAnnouncements";
import ManageSchedules from "./pages/admin/ManageSchedules";
import ManageResults from "./pages/admin/ManageResults";
import OpportunitiesAdmin from "./pages/admin/OpportunitiesAdmin";
import FeedbacksAdmin from "./pages/admin/FeedbacksAdmin";

// Teacher pages
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import MySubjects from "./pages/teacher/MySubjects";
import UploadResults from "./pages/teacher/UploadResults";
import ViewFeedback from "./pages/teacher/ViewFeedback";

// Student pages
import StudentDashboard from "./pages/student/StudentDashboard";
import MyResults from "./pages/student/MyResults";
import MySchedule from "./pages/student/MySchedule";
import OpportunitiesStudent from "./pages/student/OpportunitiesStudent";
import FeedbackStudent from "./pages/student/FeedbackStudent";

// Helper component for protecting routes
const ProtectedRoute = ({ element, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token || !allowedRoles.includes(role)) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Guest routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> {/* NEW */}
        <Route path="/reset-password/:token" element={<ResetPassword />} /> {/* NEW */}

        {/* Admin routes */}
        <Route path="/admin" element={<ProtectedRoute element={<AdminDashboard />} allowedRoles={['admin']} />} />
        <Route path="/admin/users" element={<ProtectedRoute element={<ManageUsers />} allowedRoles={['admin']} />} />
        <Route path="/admin/announcements" element={<ProtectedRoute element={<ManageAnnouncements />} allowedRoles={['admin']} />} />
        <Route path="/admin/schedules" element={<ProtectedRoute element={<ManageSchedules />} allowedRoles={['admin']} />} />
        <Route path="/admin/results" element={<ProtectedRoute element={<ManageResults />} allowedRoles={['admin']} />} />
        <Route path="/admin/opportunities" element={<ProtectedRoute element={<OpportunitiesAdmin />} allowedRoles={['admin']} />} />
        <Route path="/admin/feedbacks" element={<ProtectedRoute element={<FeedbacksAdmin />} allowedRoles={['admin']} />} />

        {/* Teacher routes */}
        <Route path="/teacher" element={<ProtectedRoute element={<TeacherDashboard />} allowedRoles={['teacher']} />} />
        <Route path="/teacher/subjects" element={<ProtectedRoute element={<MySubjects />} allowedRoles={['teacher']} />} />
        <Route path="/teacher/upload-results" element={<ProtectedRoute element={<UploadResults />} allowedRoles={['teacher']} />} />
        <Route path="/teacher/feedbacks" element={<ProtectedRoute element={<ViewFeedback />} allowedRoles={['teacher']} />} />

        {/* Student routes */}
        <Route path="/student" element={<ProtectedRoute element={<StudentDashboard />} allowedRoles={['student']} />} />
        <Route path="/student/results" element={<ProtectedRoute element={<MyResults />} allowedRoles={['student']} />} />
        <Route path="/student/schedule" element={<ProtectedRoute element={<MySchedule />} allowedRoles={['student']} />} />
        <Route path="/student/opportunities" element={<ProtectedRoute element={<OpportunitiesStudent />} allowedRoles={['student']} />} />
        <Route path="/student/feedback" element={<ProtectedRoute element={<FeedbackStudent />} allowedRoles={['student']} />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
