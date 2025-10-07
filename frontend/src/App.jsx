import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";

// Guest Pages
import Home from "./pages/guest/Home";
import About from "./pages/guest/About";
import Contact from "./pages/guest/Contact";
import Login from "./pages/guest/Login";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddStudent from "./pages/admin/AddStudent";
import ResultsList from "./pages/admin/ResultsList";

// Student Pages
import StudentDashboard from "./pages/student/StudentDashboard";
import Results from "./pages/student/Results";
import Notifications from "./pages/student/Notifications";

// Private Route Wrapper
function PrivateRoute({ children, role }) {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  if (!token || userRole !== role) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* 🌐 Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* 🔒 Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute role="admin">
              <DashboardLayout role="admin">
                <AdminDashboard />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/add-student"
          element={
            <PrivateRoute role="admin">
              <DashboardLayout role="admin">
                <AddStudent />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/results"
          element={
            <PrivateRoute role="admin">
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
            <PrivateRoute role="student">
              <DashboardLayout role="student">
                <StudentDashboard />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/student/results"
          element={
            <PrivateRoute role="student">
              <DashboardLayout role="student">
                <Results />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/student/notifications"
          element={
            <PrivateRoute role="student">
              <DashboardLayout role="student">
                <Notifications />
              </DashboardLayout>
            </PrivateRoute>
          }
        />

        {/* Redirect unknown paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
