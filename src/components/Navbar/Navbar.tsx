import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/Navbar.css";
export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) =>
    location.pathname === path ? "dark:text-white" : "";
  return (
    <div>
      <nav className="bg-white dark:bg-gray-800  shadow rounded-2xl">
        <div className="px-8 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div className=" flex items-center">
              <a className="flex-shrink-0" href="/">
                <img className="w-8 h-8" src="/rocket.png" alt="Workflow" />
              </a>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  <Link
                    className={`text-gray-300 ${isActive(
                      "/"
                    )}  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    to="/">
                    Home
                  </Link>
                  <Link
                    className={`text-gray-300 ${isActive(
                      "/product-pitch"
                    )} hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    to="/product-pitch">
                    Product Pitch
                  </Link>
                  <Link
                    className={`text-gray-300 ${isActive(
                      "/target-audience"
                    )} hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    to="/target-audience">
                    Target Audience
                  </Link>
                  <Link
                    className={`text-gray-300 ${isActive(
                      "/reviews-generator"
                    )}  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    to="/">
                    Reviews Generator
                  </Link>
                  <Link
                    className={`text-gray-300 ${isActive(
                      "/landing-page"
                    )}  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    to="/landing-page">
                    Landing page
                  </Link>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="flex items-center ml-4 md:ml-6"></div>
            </div>
            <div className="flex -mr-2 md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="w-8 h-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/#">
                Home
              </Link>
              <Link
                className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/#">
                Review Generator
              </Link>
              <Link
                className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/target-audience">
                Target Audience
              </Link>
              <a
                className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                href="/#">
                Product Picth
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
