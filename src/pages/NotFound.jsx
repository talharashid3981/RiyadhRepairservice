import React from "react";
import { Link } from "react-router-dom";
import { Home, RefreshCcw } from "lucide-react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 mt-12 text-center px-4 sm:px-6">
      {/* 🔥 FIXED: Consistent Container */}
      <div className="max-w-[1920px] mx-auto w-full">
        

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-800 mb-3">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-700 mb-4">
          {t("notFound.heading") || "Oops! Page Not Found"}
        </h2>

        {/* Message */}
        <p className="text-slate-600 text-base sm:text-lg max-w-md mx-auto mb-8 leading-relaxed">
          {t("notFound.message") || 
            "The page you're looking for doesn't exist or might have been moved. Let's get you back on track."}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center gap-2 bg-[#14b8a6] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#0d9488] transition-all duration-300 font-semibold"
          >
            <Home size={20} />
            {t("notFound.backHome") || "Back to Home"}
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 border-2 border-slate-400 text-slate-700 px-6 py-3 rounded-full hover:bg-slate-200 transition-all duration-300 font-semibold"
          >
            <RefreshCcw size={20} />
            {t("notFound.refresh") || "Refresh Page"}
          </button>
        </div>

        {/* Additional Help Links */}
        <div className="mt-12 pt-8 border-t border-gray-300 max-w-2xl mx-auto">
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            {t("notFound.helpText") || "Need help? Visit these pages:"}
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            <Link 
              to="/services" 
              className="text-[#14b8a6] hover:text-[#0d9488] font-semibold transition-colors underline"
            >
              {t("nav.services") || "Services"}
            </Link>
            <span className="text-gray-400">|</span>
            <Link 
              to="/contact" 
              className="text-[#14b8a6] hover:text-[#0d9488] font-semibold transition-colors underline"
            >
              {t("nav.contact") || "Contact"}
            </Link>
            <span className="text-gray-400">|</span>
            <Link 
              to="/about" 
              className="text-[#14b8a6] hover:text-[#0d9488] font-semibold transition-colors underline"
            >
              {t("nav.about") || "About"}
            </Link>
            <span className="text-gray-400">|</span>
            <Link 
              to="/blog" 
              className="text-[#14b8a6] hover:text-[#0d9488] font-semibold transition-colors underline"
            >
              {t("nav.blog") || "Blog"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;