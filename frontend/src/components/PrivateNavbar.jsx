import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function PrivateNavbar({ role, toggleSidebar }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // Menu items based on role
  const menuItems =
    role === "admin"
      ? [
          { label: "Dashboard", to: "/admin/dashboard" },
          { label: "Add Student", to: "/admin/add-student" },
          { label: "Results", to: "/admin/results" },
          { label: "Logout", action: () => handleLogout() },
        ]
      : [
          { label: "Dashboard", to: "/student/dashboard" },
          { label: "My Results", to: "/student/results" },
          { label: "Notifications", to: "/student/notifications" },
          { label: "Logout", action: () => handleLogout() },
        ];

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  }

  return (
    <nav className="bg-gray-100 p-4 fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/favicon.ico" alt="logo" className="w-6 h-6" />
          <h1 className="text-2xl font-bold text-gray-800">
            {role === "admin" ? "Admin Panel" : "Student Panel"}
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4">
          {menuItems.map((item, idx) =>
            item.label === "Logout" ? (
              <li key={idx}>
                <button
                  onClick={item.action}
                  className="px-4 py-2 rounded-2xl bg-red-500 text-white hover:bg-red-400 transition-colors duration-300"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li key={idx}>
                <Link
                  to={item.to}
                  className={`px-4 py-2 rounded-2xl transition-colors duration-300 ${
                    location.pathname === item.to
                      ? "bg-yellow-400 text-black"
                      : "bg-blue-600 text-white hover:bg-blue-200 hover:text-blue-800"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div
            className="flex-1 bg-black bg-opacity-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="w-64 bg-gray-100 shadow-lg p-6">
            <ul className="flex flex-col gap-2">
              {menuItems.map((item, idx) =>
                item.label === "Logout" ? (
                  <li key={idx}>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        item.action();
                      }}
                      className="block w-full px-4 py-2 rounded-2xl text-center bg-red-500 text-white hover:bg-red-400 transition"
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <li key={idx}>
                    <Link
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 rounded-2xl text-center transition-colors duration-300 ${
                        location.pathname === item.to
                          ? "bg-yellow-400 text-black"
                          : "bg-blue-600 text-white hover:bg-blue-200 hover:text-blue-800"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
