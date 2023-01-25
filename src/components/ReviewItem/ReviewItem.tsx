import React from "react";
import "./styles/ReviewItem.css";
export interface ReviewItemInterface {
  user: string;
  children?: React.ReactNode;
  isLoading?: boolean;
}

const ReviewItem: React.FC<ReviewItemInterface> = ({
  user,
  children,
  isLoading = false,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
      <p className="text-gray-600 dark:text-white text-center">
        <span className="text-lg font-bold text-indigo-500">“</span>
        {children}
        <span className="text-lg font-bold text-indigo-500">”</span>
      </p>
      <div className="flex items-center mt-4">
        <div className="flex flex-col flex-1 justify-between ml-2 text-center">
          <span className="text-sm font-semibold text-indigo-500">{user}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
