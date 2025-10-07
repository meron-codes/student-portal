// src/routes/AdminStudentRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "../components/PrivateRoute";

import AdminDashboard from "../pages/admin/AdminDashboard";
import AddStudent from "../pages/admin/AddStudent";
import ResultsList from "../pages/admin/ResultsList";

import StudentDashboard from "../pages/student/StudentDashboard";
import Results from "../pages/student/Results";
import Notifications from "../pages/student/Notifications";

export default function AdminStudentRoutes() {
  return (
    <Routes>
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
  );
}
