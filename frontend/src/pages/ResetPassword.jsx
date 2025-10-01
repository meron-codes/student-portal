import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      const res = await fetch(`http://localhost:5000/api/password/reset/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
      } else {
        setMessage(data.message || "Password reset successfully!");
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (err) {
      setError("Server error. Try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-16 flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-poppins font-bold text-blue-700 mb-4 text-center">
            Reset Password
          </h1>
          <p className="text-gray-700 mb-6 text-center font-roboto">
            Enter your new password below.
          </p>

          {error && (
            <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-center">
              {error}
            </div>
          )}
          {message && (
            <div className="bg-green-100 text-green-700 p-2 rounded mb-4 text-center">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-semibold py-3 rounded-lg hover:bg-blue-200 hover:text-black transition"
            >
              Reset Password
            </button>
          </form>

          <p className="mt-6 text-center text-gray-500 font-roboto text-sm">
            Remembered your password?{" "}
            <a href="/login" className="text-blue-700 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ResetPassword;
