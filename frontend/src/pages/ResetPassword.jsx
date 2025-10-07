import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { resetPassword } from "../api/api";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const data = await resetPassword(token, password);
      setMessage(data.message || "Password reset successfully!");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Server error. Try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-16 flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-blue-700 mb-4 text-center">
            Reset Password
          </h1>

          {error && <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-center">{error}</div>}
          {message && <div className="bg-green-100 text-green-700 p-2 rounded mb-4 text-center">{message}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-500"
              required
            />
            <button className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-200 hover:text-black transition">
              Reset Password
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ResetPassword;
