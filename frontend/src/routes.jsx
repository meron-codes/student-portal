import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Guest pages
import Home from "./pages/guest/Home";
import About from "./pages/guest/About";
import Contact from "./pages/guest/Contact";
import Login from "./pages/guest/Login";

// Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageAnnouncements from "./pages/admin/ManageAnnouncements";
import ManageSchedules from "./pages/admin/ManageSchedules";
import ManageResults from "./pages/admin/ManageResults";
import OpportunitiesAdmin from "./pages/admin/Opportunities";
import FeedbacksAdmin from "./pages/admin/Feedbacks";

// Teacher pages
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import MySubjects from "./pages/teacher/MySubjects";
import UploadResults from "./pages/teacher/UploadResults";
import ViewFeedback from "./pages/teacher/ViewFeedback";

// Student pages
import StudentDashboard from "./pages/student/StudentDashboard";
import MyResults from "./pages/student/MyResults";
import MySchedule from "./pages/student/MySchedule";
import OpportunitiesStudent from "./pages/student/Opportunities";
import FeedbackStudent from "./pages/student/Feedback";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Guest routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* Admin routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<ManageUsers />} />
        <Route path="/admin/announcements" element={<ManageAnnouncements />} />
        <Route path="/admin/schedules" element={<ManageSchedules />} />
        <Route path="/admin/results" element={<ManageResults />} />
        <Route path="/admin/opportunities" element={<OpportunitiesAdmin />} />
        <Route path="/admin/feedbacks" element={<FeedbacksAdmin />} />

        {/* Teacher routes */}
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/teacher/subjects" element={<MySubjects />} />
        <Route path="/teacher/upload-results" element={<UploadResults />} />
        <Route path="/teacher/feedbacks" element={<ViewFeedback />} />

        {/* Student routes */}
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/results" element={<MyResults />} />
        <Route path="/student/schedule" element={<MySchedule />} />
        <Route path="/student/opportunities" element={<OpportunitiesStudent />} />
        <Route path="/student/feedback" element={<FeedbackStudent />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
