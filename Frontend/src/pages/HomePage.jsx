import React, { useState } from "react";
import { addURL, authanticated } from "../service/urlService";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


export default function UrlShortenerLanding() {
  const [errorMessage, setErrorMessage] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      url: formData.get("url"),
      code: formData.get("code"),
    };

    try {
      const response = await addURL(data);

      setLink(`http://localhost:8000/url/${response.code}`);
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4 sm:p-8">
        <div className="max-w-3xl w-full flex flex-col items-center space-y-8 -mt-20">

          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Shorten Your Links
            </h1>

            <p className="text-lg text-gray-600 max-w-lg mx-auto">
              Paste your long and complicated URL below to generate a clean,
              easily shareable short link.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl flex flex-col gap-4"
          >

            {/* URL */}
            <input
              name="url"
              type="url"
              placeholder="https://example.com/your-very-long-url-here"
              required
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm"
            />

            {/* Custom Code */}
            <div className="flex flex-col sm:flex-row gap-3">

              <div className="flex-grow flex items-center border border-gray-300 rounded-md bg-white focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500 shadow-sm overflow-hidden">

                <span className="px-4 py-3 text-gray-500 bg-gray-100 border-r border-gray-300 text-sm sm:text-base hidden sm:block">
                  short.ly/
                </span>

                <input
                  type="text"
                  name="code"
                  placeholder="custom-code (optional)"
                  className="flex-grow px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none"
                />

              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-sm whitespace-nowrap"
              >
                Generate Link
              </button>

            </div>
          </form>

          {/* Error */}
          {errorMessage && (
            <p className="text-sm font-medium text-red-500">
              {errorMessage}
            </p>
          )}

          {/* Generated Link */}
          {link && (
            <Link
              className="text-sm font-medium text-blue-500 hover:underline"
              to={link}
            >
              {link}
            </Link>
          )}

        </div>
      </main>
    </div>
  );
}