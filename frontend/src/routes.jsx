import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

// Guest pages
import Home from "./pages/guest/Home";
import About from "./pages/guest/About";
import Contact from "./pages/guest/Contact";
import Login from "./pages/guest/Login";

// Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddStudent from "./pages/admin/AddStudent";
import ResultsList from "./pages/admin/ResultsList";

// Student pages
import StudentDashboard from "./pages/student/StudentDashboard";
import Results from "./pages/student/Results";
import Notifications from "./pages/student/Notifications";

// Layout
import DashboardLayout from "./layouts/DashboardLayout";

export default function AppRoutes() {
  // get the current logged-in user role from localStorage
  const userRole = localStorage.getItem("role");

  return (
    <Routes>
      {/* 🌐 Guest Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />

      {/* 🔒 Admin Routes */}
      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoute allowedRoles={["admin"]} userRole={userRole}>
            <DashboardLayout role="admin">
              <AdminDashboard />
            </DashboardLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/add-student"
        element={
          <PrivateRoute allowedRoles={["admin"]} userRole={userRole}>
            <DashboardLayout role="admin">
              <AddStudent />
            </DashboardLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/results"
        element={
          <PrivateRoute allowedRoles={["admin"]} userRole={userRole}>
            <DashboardLayout role="admin">
              <ResultsList />
            </DashboardLayout>
          </PrivateRoute>
        }
      />

      {/* 👩‍🎓 Student Routes */}
      <Route
        path="/student/dashboard"
        element={
          <PrivateRoute allowedRoles={["student"]} userRole={userRole}>
            <DashboardLayout role="student">
              <StudentDashboard />
            </DashboardLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/student/results"
        element={
          <PrivateRoute allowedRoles={["student"]} userRole={userRole}>
            <DashboardLayout role="student">
              <Results />
            </DashboardLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/student/notifications"
        element={
          <PrivateRoute allowedRoles={["student"]} userRole={userRole}>
            <DashboardLayout role="student">
              <Notifications />
            </DashboardLayout>
          </PrivateRoute>
        }
      />

      {/* Unauthorized page */}
      <Route path="/unauthorized" element={<p>Unauthorized access</p>} />

      {/* Redirect unknown paths */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
