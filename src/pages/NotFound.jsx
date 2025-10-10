import React from "react";
import { Link } from "react-router-dom";
import { Wrench, Home, RefreshCcw } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-center px-6">
      {/* Icon */}
      <div className="bg-teal-600 text-white p-6 rounded-full shadow-lg mb-6">
        <Wrench size={48} />
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-slate-800 mb-3">404</h1>
      <h2 className="text-2xl font-semibold text-slate-700 mb-4">
        Oops! Page Not Found
      </h2>

      {/* Message */}
      <p className="text-slate-500 max-w-md mb-8">
        The page you’re looking for doesn’t exist or might have been moved.
        Let’s get you back on track.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to="/"
          className="flex items-center gap-2 bg-teal-600 text-white px-5 py-3 rounded-full shadow-md hover:bg-teal-700 transition-all"
        >
          <Home size={20} />
          Back to Home
        </Link>

        <button
          onClick={() => window.location.reload()}
          className="flex items-center gap-2 border border-slate-400 text-slate-700 px-5 py-3 rounded-full hover:bg-slate-200 transition-all"
        >
          <RefreshCcw size={20} />
          Refresh Page
        </button>
      </div>
    </div>
  );
};

export default NotFound;
