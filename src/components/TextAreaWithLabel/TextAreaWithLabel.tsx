import React from "react";
import "./styles/TextAreaWithLabel.css";
export interface TextAreaWithLabelInterface {
  label: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  required?: boolean;
}

const TextAreaWithLabel: React.FC<TextAreaWithLabelInterface> = ({
  label,
  value,
  placeholder,
  onChange,
  required = false,
}) => {
  return (
    <div className="relative mb-4">
      <label>{label}</label>
      <textarea
        value={value}
        onChange={(evt) => onChange && onChange(evt.target.value)}
        className="mt-2 flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        placeholder={placeholder}
        rows={5}
        required={required}
        cols={40}></textarea>
    </div>
  );
};

export default TextAreaWithLabel;
