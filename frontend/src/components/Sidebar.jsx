import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, UserPlus, ClipboardList, Bell, LogOut } from "lucide-react";

export default function Sidebar({ role = "student", open, setOpen }) {
  const location = useLocation();
  const navigate = useNavigate();

  const adminMenu = [
    { label: "Dashboard", to: "/admin/dashboard", icon: <Home size={18} /> },
    { label: "Add Student", to: "/admin/add-student", icon: <UserPlus size={18} /> },
    { label: "Manage Results", to: "/admin/results", icon: <ClipboardList size={18} /> },
    { label: "Notifications", to: "/admin/notifications", icon: <Bell size={18} /> },
  ];

  const studentMenu = [
    { label: "Dashboard", to: "/student/dashboard", icon: <Home size={18} /> },
    { label: "My Results", to: "/student/results", icon: <ClipboardList size={18} /> },
    { label: "Notifications", to: "/student/notifications", icon: <Bell size={18} /> },
  ];

  const menu = role === "admin" ? adminMenu : studentMenu;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Sidebar for desktop & mobile */}
      <aside
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r shadow-sm p-4 transform transition-transform duration-200 z-40
          ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="mb-6 flex items-center gap-2">
          <img src="/favicon.ico" alt="logo" className="w-8 h-8" />
          <div>
            <h3 className="text-lg font-bold">{role === "admin" ? "Admin Panel" : "Student Panel"}</h3>
            <p className="text-xs text-gray-500">Welcome back</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          {menu.map((item) => (
            <Link
              to={item.to}
              key={item.to}
              className={`flex items-center gap-3 px-3 py-2 rounded-2xl transition-colors duration-200 text-sm
                ${isActive(item.to)
                  ? "bg-yellow-400 text-black"
                  : "text-gray-700 hover:bg-blue-600 hover:text-white"}
              `}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-6 border-t pt-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-2xl bg-red-50 text-red-600 hover:bg-red-100 transition"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>

        <div className="mt-4 text-xs text-gray-400">
          <p>Tip: Use the top menu on small screens</p>
        </div>
      </aside>
    </>
  );
}
