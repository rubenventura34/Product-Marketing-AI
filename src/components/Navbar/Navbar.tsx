import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/Navbar.css";
export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) =>
    location.pathname === path ? "dark:text-white" : "";

  const [theme, setTheme] = useState(
    localStorage.theme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    }
  };
  return (
    <div className="w-full">
      <nav className="bg-gray-300 dark:bg-gray-800  shadow rounded-2xl sm:w-100">
        <div className="px-8 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div className=" flex items-center">
              <a className="flex-shrink-0" href="/">
                <img className="w-8 h-8" src="/rocket.png" alt="Workflow" />
              </a>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  <Link
                    className={`text-gray-500 ${isActive(
                      "/"
                    )}  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    to="/">
                    Home
                  </Link>
                  <Link
                    className={`text-gray-500 ${isActive(
                      "/product-pitch"
                    )} hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    to="/product-pitch">
                    Product Pitch
                  </Link>
                  <Link
                    className={`text-gray-500 ${isActive(
                      "/target-audience"
                    )} hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    to="/target-audience">
                    Target Audience
                  </Link>
                  <Link
                    className={`text-gray-500 ${isActive(
                      "/reviews-generator"
                    )}  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    to="/reviews-generator">
                    Reviews Generator
                  </Link>
                  <Link
                    className={`text-gray-500 ${isActive(
                      "/ad-generator"
                    )} hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    to="/ad-generator">
                    Ads Generator
                  </Link>
                  <Link
                    className={`text-gray-500 ${isActive(
                      "/landing-page"
                    )}  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    to="/landing-page">
                    Landing page
                  </Link>
                </div>
              </div>
              <button
                onClick={toggleTheme}
                id="theme-toggle"
                type="button"
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                <svg
                  id="theme-toggle-dark-icon"
                  className={`${theme === "dark" && "hidden"} w-5 h-5`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg
                  id="theme-toggle-light-icon"
                  className={`${theme === "light" && "hidden"} w-5 h-5`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
            {/* <div className="block">
              <div className="flex items-center ml-4 md:ml-6"></div>
            </div> */}
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
                className={`text-gray-500 ${isActive(
                  "/"
                )}  hover:text-gray-800 dark:hover:text-white px-3 py-2 block rounded-md text-base font-medium`}
                to="/">
                Home
              </Link>
              <Link
                className={`text-gray-500 ${isActive(
                  "/product-pitch"
                )} hover:text-gray-800 dark:hover:text-white px-3 py-2 block rounded-md text-base font-medium`}
                to="/product-pitch">
                Product Pitch
              </Link>
              <Link
                className={`text-gray-500 ${isActive(
                  "/target-audience"
                )} hover:text-gray-800 dark:hover:text-white px-3 py-2 block rounded-md text-base font-medium`}
                to="/target-audience">
                Target Audience
              </Link>
              <Link
                className={`text-gray-500 ${isActive(
                  "/reviews-generator"
                )}  hover:text-gray-800 dark:hover:text-white px-3 py-2 block rounded-md text-base font-medium`}
                to="/reviews-generator">
                Reviews Generator
              </Link>
              <Link
                className={`text-gray-500 ${isActive(
                  "/ad-generator"
                )}  hover:text-gray-800 dark:hover:text-white px-3 py-2 block rounded-md text-base font-medium`}
                to="/ad-generator">
                Ads Generator
              </Link>
              <Link
                className={`text-gray-500 ${isActive(
                  "/landing-page"
                )}  hover:text-gray-800 dark:hover:text-white px-3 py-2 block rounded-md text-base font-medium`}
                to="/landing-page">
                Landing page
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
