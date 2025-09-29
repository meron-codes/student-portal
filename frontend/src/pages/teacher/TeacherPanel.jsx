import { Outlet, NavLink } from "react-router-dom";

export default function TeacherPanel() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-blue-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Teacher Panel</h2>
        <nav className="flex flex-col gap-2">
          <NavLink to="dashboard" className={({isActive}) => isActive ? "font-bold" : ""}>Dashboard</NavLink>
          <NavLink to="subjects" className={({isActive}) => isActive ? "font-bold" : ""}>My Subjects</NavLink>
          <NavLink to="upload-results" className={({isActive}) => isActive ? "font-bold" : ""}>Upload Results</NavLink>
          <NavLink to="feedbacks" className={({isActive}) => isActive ? "font-bold" : ""}>Feedback</NavLink>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}
