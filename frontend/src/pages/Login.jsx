import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('token', 'dummy_token'); // simulate login
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-orange-200 to-yellow-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-2xl shadow-2xl w-96 space-y-6"
      >
        <h1 className="text-3xl font-extrabold text-center text-orange-600">Welcome Back</h1>
        <p className="text-center text-gray-500">Sign in to continue</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-xl font-semibold shadow-md hover:from-orange-600 hover:to-orange-700 transition"
        >
          Login
        </button>

        <p className="text-center text-gray-500">
          Don’t have an account?{' '}
          <a href="/register" className="text-orange-600 font-semibold hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;