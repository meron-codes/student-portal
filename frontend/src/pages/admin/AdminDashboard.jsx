import DashboardLayout from "../../layouts/DashboardLayout";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Add Students",
      description: "Register new students with full info.",
      action: () => navigate("/admin/add-student"),
    },
    {
      title: "Manage Results",
      description: "Add, update, or delete results quickly.",
      action: () => navigate("/admin/results"),
    },
    {
      title: "Announcements",
      description: "Share important updates with students.",
      action: () => navigate("/admin/announcements"),
    },
  ];

  return (
    <DashboardLayout role="admin">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition cursor-pointer"
            onClick={card.action}
          >
            <h2 className="text-blue-700 font-semibold text-lg">{card.title}</h2>
            <p className="text-gray-600 mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
