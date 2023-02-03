import React from "react";
import { Button } from "../../components/Button";
import "./styles/HomePage.css";

import {
  FcBusinessman,
  FcFaq,
  FcMultipleDevices,
  FcPodiumWithAudience,
} from "react-icons/fc";
import { Link } from "react-router-dom";
export interface HomePageInterface {}

const HomePage: React.FC<HomePageInterface> = () => {
  return (
    <div className="homepage page">
      <h1 style={{ fontSize: "2.5em", color: "yellow" }}>Product Marketing</h1>
      <h3>Boost the growth of your product</h3>

      <span className="border-bottom-gradient dark:text-white text-sm relative">
        Explore our tools:
      </span>

      <div className="mt-6 flex flex-wrap justify-center gap-6">
        <div className="w-64 hover:bg-gray-900 shadow p-4 py-6 bg-white dark:bg-gray-800  shadow-lg rounded-2xl">
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-24 h-24 rounded-full flex justify-center items-center text-gray-800">
              <FcBusinessman size="84" />
            </div>
            <p className="mt-2 mb-4 text-xl dark:text-white font-medium text-gray-800">
              Product Pitch
            </p>
            <p className="px-2 text-xs text-center text-gray-400">
              Generate a speech that attracts customers to buy your product
            </p>
            <br />
            <Link
              className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              to="/product-pitch">
              GO
            </Link>
          </div>
        </div>

        <div className="w-64 hover:bg-gray-900 shadow p-4 py-6 bg-white  dark:bg-gray-800  shadow-lg rounded-2xl">
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-24 h-24 rounded-full flex justify-center items-center text-gray-800">
              <FcPodiumWithAudience size="84" />
            </div>
            <p className="mt-2 mb-4 text-xl dark:text-white font-medium text-gray-800">
              Target Audience
            </p>
            <p className="px-2 text-xs text-center text-gray-400">
              Know which audience you should sell your product to
            </p>
            <br />
            <Link
              className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              to="/target-audience">
              GO
            </Link>
          </div>
        </div>

        <div className="w-64 hover:bg-gray-900 shadow p-4 py-6 bg-white  dark:bg-gray-800  shadow-lg rounded-2xl">
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-24 h-24 rounded-full flex justify-center items-center text-gray-800">
              <FcFaq size="84" />
            </div>
            <p className="mt-2 mb-4 text-xl dark:text-white font-medium text-gray-800">
              Generate reviews
            </p>
            <p className="px-2 text-xs text-center text-gray-400">
              Generate positive reviews for your landing page
            </p>
            <br />
            <Link
              className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              to="/reviews-generator">
              GO
            </Link>
          </div>
        </div>

        <div className="w-64 hover:bg-gray-900 shadow p-4 py-6 bg-white  dark:bg-gray-800  shadow-lg rounded-2xl">
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-24 h-24 rounded-full flex justify-center items-center text-gray-800">
              <FcMultipleDevices size="84" />
            </div>
            <p className="mt-2 mb-4 text-xl dark:text-white font-medium text-gray-800">
              Landing Page
            </p>
            <p className="px-2 text-xs text-center text-gray-400">
              Attract more customers with a landing page of your product
            </p>
            <br />
            <Link
              className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              to="/landing-page">
              GO
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
