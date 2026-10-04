import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { login, signup } from '../service/AuthService';
import useAuth from '../context/AuthContext';



export default function AuthPage() {
  // State to toggle between Login (true) and Sign-up (false)
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, seterrorMessage] = useState("");
  const {isAuthenticated, changeStatus} = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const data = {
      name : formData.get("name"),
      email : formData.get("email"),
      password : formData.get("password")
    }
    let response;
    if(isLogin){

      try {
        response =await login(data);
        changeStatus(true);
        navigate("/shortener/");
        
      } catch (error) {
        seterrorMessage("email or password is wrong try again")
      } 
      
    }else{
      try {
        response =await signup(data)
      } catch (error) {
        seterrorMessage("email is alreay in system ")
      }

    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans text-gray-900">
      {/* {isAuthenticated ? <h1>hello</h1> : <h1>by</h1>} */}
      {/* Header Section */}  
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {isLogin ? 'Sign in to your account' : 'Create a new account'}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            type="button"
            className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline"
          >
            {isLogin ? 'Sign up here' : 'Sign in here'}
          </button>
        </p>
      </div>

      {/* Form Card */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-200">
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {/* Full Name Field - Only visible on Sign-up */}
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required={!isLogin}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            )}

            {/* Email Field - Visible on both */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Password Field - Visible on both */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete={isLogin ? "current-password" : "new-password"}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <label htmlFor="password" className="block text-sm font-medium text-red-500">
                {errorMessage}
            </label>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                {isLogin ? 'Sign in' : 'Sign up'}
              </button>
            </div>
            
          </form>
        </div>
      </div>
      
    </div>
  );
}