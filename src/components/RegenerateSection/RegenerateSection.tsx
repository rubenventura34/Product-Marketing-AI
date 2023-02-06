import React from "react";
import "./styles/RegenerateSection.css";
export interface RegenerateSectionInterface {
  onClick?: () => void;
}

const RegenerateSection: React.FC<RegenerateSectionInterface> = ({
  onClick,
}) => {
  return (
    <div className="regenerate-section">
      <button
        onClick={() => onClick && onClick()}
        title="Regenerate Section"
        className="flex items-center p-4  transition ease-in duration-200 uppercase rounded-full  bg-pink-800 text-white border-2 border-gray-100 focus:outline-none">
        <svg
          className="w-3 h-3 shadow-3 dark:text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path>
        </svg>
      </button>
    </div>
  );
};

export default RegenerateSection;
