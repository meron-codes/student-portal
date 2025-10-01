import { Link, useLocation } from "react-router-dom";

export default function AdminSidebar() {
  const location = useLocation();

  const adminLinks = [
    { path: "", label: "Dashboard" },
    { path: "teachers", label: "Manage Teachers" },
    { path: "students", label: "Manage Students" },
    { path: "subjects", label: "Manage Subjects" },
    { path: "results", label: "Manage Results" },
    { path: "announcements", label: "Manage Announcements" },
    { path: "schedules", label: "Manage Schedules" },
    { path: "opportunities", label: "Manage Opportunities" },
    { path: "feedback", label: "Manage Feedback" },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col">
      <h2 className="text-2xl font-bold p-4 border-b border-gray-700">
        Admin Panel
      </h2>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {adminLinks.map((link) => {
            const isActive =
              location.pathname === `/admin/${link.path}` ||
              (link.path === "" && location.pathname === "/admin");

            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block py-2 px-3 rounded transition hover:bg-gray-700 hover:text-yellow-400 ${
                    isActive ? "bg-gray-700 text-yellow-400 font-semibold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
