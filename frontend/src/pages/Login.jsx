// Login.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      localStorage.setItem("token", "fake-jwt-token");
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="bg-gray-900/80 rounded-lg shadow-lg p-8 min-w-[320px] w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-red-600 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="w-full px-4 py-2 mb-4 bg-black border border-gray-700 rounded text-white focus:outline-none focus:border-red-600"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full px-4 py-2 mb-4 bg-black border border-gray-700 rounded text-white focus:outline-none focus:border-red-600"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded font-semibold hover:bg-red-700 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          New here?{" "}
          <Link to="/" className="text-red-600 hover:underline">Signup now</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
