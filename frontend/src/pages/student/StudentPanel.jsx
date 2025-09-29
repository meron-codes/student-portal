import { Outlet, NavLink } from "react-router-dom";

export default function StudentPanel() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-green-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Student Panel</h2>
        <nav className="flex flex-col gap-2">
          <NavLink to="dashboard" className={({isActive}) => isActive ? "font-bold" : ""}>Dashboard</NavLink>
          <NavLink to="results" className={({isActive}) => isActive ? "font-bold" : ""}>My Results</NavLink>
          <NavLink to="schedule" className={({isActive}) => isActive ? "font-bold" : ""}>My Schedule</NavLink>
          <NavLink to="opportunities" className={({isActive}) => isActive ? "font-bold" : ""}>Opportunities</NavLink>
          <NavLink to="feedback" className={({isActive}) => isActive ? "font-bold" : ""}>Feedback</NavLink>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}
