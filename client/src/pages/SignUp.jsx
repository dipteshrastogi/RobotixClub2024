import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, signup } from '../api/authApi';
import { Link } from 'react-router-dom';
import "../styles/SignUp.css"
import { signInFailure, signInSuccess } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const [userId, setUserid] = useState()

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await signup({ username, email, password });
      setSuccess('Signup successful!');
      setError('');
      navigate('/log-in')
      // console.log(response.data);
    } catch (error) {
      setError('Signup failed. Please try again.');
    }
  };


  return (
    <div className="signup flex justify-center align-middle shadow-lg">
      <div className="signupWrap bg-gray-900 rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-yellow-500 mb-6">Sign Up</h2>

        {/* Display error and success messages */}
        {/* {error && <p className="text-red-500 text-center">{error}</p>}
    {success && <p className="text-green-500 text-center">{success}</p>} */}

        <form onSubmit={handleSignup} className="space-y-6">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
          />

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-yellow">
            Already have an account? <Link to="/log-in" className="text-yellow-500 hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}