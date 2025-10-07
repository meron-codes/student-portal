import { useState } from "react";
import PrivateNavbar from "../components/PrivateNavbar";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ role, children }) {
  // Sidebar open state (for mobile)
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 font-poppins">
      {/* Sidebar */}
      <Sidebar role={role} open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Main content */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Navbar with toggle button */}
        <PrivateNavbar role={role} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Main area */}
        <main className="pt-24 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
