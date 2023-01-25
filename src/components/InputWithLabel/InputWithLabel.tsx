import React from "react";
import "./styles/InputWithLabel.css";
export interface InputWithLabelInterface {
  label: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
  required?: boolean;
}

const InputWithLabel: React.FC<InputWithLabelInterface> = ({
  label,
  placeholder,
  value,
  onChange,
  required,
}) => {
  return (
    <div className=" relative mb-4">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(evt) => onChange && onChange(evt.target.value)}
        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputWithLabel;
