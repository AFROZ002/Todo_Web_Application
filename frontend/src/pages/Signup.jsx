// Signup.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("user", JSON.stringify({ email, password }));
      alert("Signup successful! Now login.");
      navigate("/login");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="bg-gray-900/80 rounded-lg shadow-lg p-8 min-w-[320px] w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-red-600 text-center">Sign Up</h2>
        <form onSubmit={handleSignup}>
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
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-red-600 hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
