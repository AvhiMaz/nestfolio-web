import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 flex items-center justify-between bg-transparent backdrop-blur-2xl">
      <div className="flex items-center">
        <div className="mr-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" fill="#00BFFF" fillOpacity="0.8" />
            <circle cx="12" cy="12" r="5" fill="#FFFFFF" />
          </svg>
        </div>
        <div className="text-white font-bold tracking-wider">
          NESTFOLIO<span className="text-xs text-gray-400 ml-1">devnet</span>
        </div>
        <div className="ml-8 hidden md:block">
          <a
            href="#documentation"
            className="text-gray-300 hover:text-white text-sm"
          >
            DOCUMENTATION
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
