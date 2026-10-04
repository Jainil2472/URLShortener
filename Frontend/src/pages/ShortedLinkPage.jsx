import React, { useState } from 'react';

export default function ShortenedLinkPage() {
  const [copied, setCopied] = useState(false);

  // Mock data - you would pass these as props or grab them from state/context
  const shortUrl = "https://short.ly/custom-code";
  const originalUrl = "https://example.com/your-very-long-url-that-was-just-shortened";

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    
    // Reset the "Copied!" text back to "Copy" after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center font-sans text-gray-900 p-4 sm:p-8">
      
      {/* Top Navigation / Header */}
      <header className="absolute top-0 right-0 p-4 sm:p-6 w-full flex justify-end">
        <button className="px-5 py-2 bg-white text-gray-700 font-medium border border-gray-300 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200">
          My Account
        </button>
      </header>

      {/* Main Card */}
      <div className="max-w-2xl w-full bg-white p-6 sm:p-10 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center space-y-8 mt-10">
        
        {/* Success Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-2">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Your link is ready!</h1>
          <p className="text-gray-500 truncate max-w-md mx-auto">
            Original: {originalUrl}
          </p>
        </div>

        {/* Short Link & Copy Area */}
        <div className="w-full flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            readOnly
            value={shortUrl}
            className="flex-grow px-4 py-4 bg-gray-50 border border-gray-300 rounded-md text-gray-900 font-medium text-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-center sm:text-left"
          />
          <button
            onClick={handleCopy}
            className={`px-8 py-4 font-medium rounded-md transition-colors shadow-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              copied 
                ? 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500' 
                : 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500'
            }`}
          >
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>

        {/* Action Links */}
        <div className="pt-4 flex justify-center w-full border-t border-gray-100">
          <button 
            onClick={() => window.location.href = '/'}
            className="text-blue-600 hover:text-blue-500 font-medium transition-colors"
          >
            ← Shorten another link
          </button>
        </div>

      </div>
    </div>
  );
}