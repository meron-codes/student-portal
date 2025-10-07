import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { requestPasswordReset } from "../api/api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const data = await requestPasswordReset(email);
      setMessage(data.message || "Password reset email sent!");
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
            Forgot Password
          </h1>

          {error && <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-center">{error}</div>}
          {message && <div className="bg-green-100 text-green-700 p-2 rounded mb-4 text-center">{message}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-500"
              required
            />
            <button className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-200 hover:text-black transition">
              Send Reset Link
            </button>
          </form>

          <p className="mt-6 text-center text-gray-500 text-sm">
            Remembered your password?{" "}
            <a href="/login" className="text-blue-700 hover:underline">Login here</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ForgotPassword;
