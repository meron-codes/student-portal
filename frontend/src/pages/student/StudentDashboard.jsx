import DashboardLayout from "../../layouts/DashboardLayout";
import { useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "View Results",
      description: "Check your academic results anytime.",
      action: () => navigate("/student/results"),
    },
    {
      title: "Notifications",
      description: "Stay updated with announcements.",
      action: () => navigate("/student/notifications"),
    },
    {
      title: "Profile",
      description: "Manage your account and personal info.",
      action: () => navigate("/student/profile"),
    },
  ];

  return (
    <DashboardLayout role="student">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Student Dashboard</h1>

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
