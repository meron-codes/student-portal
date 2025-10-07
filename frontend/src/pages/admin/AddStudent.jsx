import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import axios from "axios";

export default function AddStudent() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    student_id: "",
    grade: "",
    field: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:5000/api/auth/add-user",
        { ...formData, role: "student" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage(res.data.message);

      // Reset form
      setFormData({
        full_name: "",
        email: "",
        password: "",
        student_id: "",
        grade: "",
        field: "",
      });
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Error adding student");
    }
  };

  return (
    <DashboardLayout role="admin">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Add New Student</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md max-w-lg mx-auto"
      >
        <div className="grid gap-4">
          {["full_name", "email", "password", "student_id", "grade", "field"].map(
            (key) => (
              <input
                key={key}
                type={key === "password" ? "password" : "text"}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                placeholder={key.replace("_", " ").replace(/\b\w/g, c => c.toUpperCase())}
                className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
                required
              />
            )
          )}
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
        >
          Add Student
        </button>

        {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
      </form>
    </DashboardLayout>
  );
}
