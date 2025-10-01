import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUser(email, password);
      const { role } = data.user;

      if (role === "admin") navigate("/admin");
      else if (role === "teacher") navigate("/teacher");
      else if (role === "student") navigate("/student");
      else navigate("/");
    } catch (err) {
      setError(err.message || "Invalid login credentials!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-poppins font-bold text-blue-700 text-center mb-6">
          Login to AGSS Portal
        </h1>

        {error && (
          <p className="text-red-500 text-center mb-4 font-roboto">{error}</p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-roboto mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-roboto mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white font-semibold py-3 rounded-lg hover:bg-blue-200 hover:text-black transition"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500 font-roboto text-sm">
          Forgot your password?{" "}
          <a href="/forgot-password" className="text-blue-700 hover:underline">
            Reset it here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
