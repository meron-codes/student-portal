// src/components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";

/**
 * PrivateRoute component protects routes based on authentication and user role.
 * 
 * Props:
 * - children: JSX element to render if access is granted
 * - allowedRoles: array of roles allowed to access this route (e.g. ['admin'])
 * - userRole: current logged-in user's role ('admin' or 'student')
 */
export default function PrivateRoute({ children, allowedRoles, userRole }) {
  const token = localStorage.getItem("token");

  // If user is not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If user's role is not allowed for this route
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // If all good → render the protected page
  return children;
}
