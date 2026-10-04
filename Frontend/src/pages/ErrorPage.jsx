import React from 'react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center font-sans text-gray-900 p-4">
      <div className="text-center max-w-md w-full space-y-6">
        
        {/* 404 Hero Text */}
        <h1 className="text-8xl sm:text-9xl font-extrabold text-blue-600 tracking-tighter">
          404
        </h1>
        
        {/* Error Message */}
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Page not found
          </h2>
          <p className="text-lg text-gray-600">
            Sorry, we couldn't find the page you're looking for. The link might be broken, or the page may have been removed.
          </p>
        </div>
        
        {/* Back to Home Button */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={() => window.location.href = '/'}
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Go back home
          </button>
        </div>

      </div>
    </div>
  );
}