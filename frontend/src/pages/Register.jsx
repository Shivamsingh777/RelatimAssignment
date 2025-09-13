import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/auth/register', { name, email, password });
      alert('Registered successfully');
      window.location.href = '/login';
    } catch (err) {
      alert(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-orange-200 to-yellow-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-10 rounded-2xl shadow-2xl w-96 space-y-6"
      >
        <h1 className="text-3xl font-extrabold text-center text-orange-600">Create Account</h1>
        <p className="text-center text-gray-500">Sign up to get started</p>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
        />

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
          Register
        </button>

        <p className="text-center text-gray-500">
          Already have an account?{' '}
          <a href="/login" className="text-orange-600 font-semibold hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default Register;