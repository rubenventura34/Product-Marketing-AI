import React from "react";
import "./styles/Button.css";
export interface ButtonInterface {
  children: React.ReactNode;
}

const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`py-2 px-4 bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full ${className}`}>
      {children}
    </button>
  );
};

export default Button;
