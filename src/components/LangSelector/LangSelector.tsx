import React, { useState } from "react";
import Flag from "react-flagkit";
import "./styles/LangSelector.css";
export interface LangSelectorInterface {
  onChange?: (value: string) => void;
}

interface ILang {
  name: string;
  lang: string;
  country: string;
}

const langs: ILang[] = [
  {
    name: "Spanish",
    lang: "es",
    country: "ES",
  },
  {
    name: "English",
    lang: "en",
    country: "US",
  },
];

const LangSelector: React.FC<LangSelectorInterface> = ({ onChange }) => {
  const [isVisible, setVisibility] = useState(false);
  const [selectedLang, setLang] = useState(langs[1]);
  const setSelectedLang = (lang: ILang) => {
    setLang(lang);
    setVisibility(false);
    onChange && onChange(lang.lang);
  };
  return (
    <div className="w-64">
      <div className="relative mt-1">
        <button
          onClick={() => setVisibility(!isVisible)}
          type="button"
          className="relative p-0 text-left rounded-md shadow-lg cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <span className="flex items-center">
            <Flag country={selectedLang.country} />
          </span>
        </button>
        <div
          className={`absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg ${
            !isVisible && "hidden"
          }`}>
          <ul
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-item-3"
            className="py-1 overflow-auto text-base rounded-md max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {langs.map((lang) => (
              <li
                onClick={() => setSelectedLang(lang)}
                role="option"
                className="relative py-2 pl-3 text-gray-900 cursor-default select-none hover:bg-indigo-500 hover:text-white pr-2">
                <div className="flex items-center">
                  <Flag country={lang.country} />
                  <span className="block ml-3 font-normal truncate">
                    {lang.name}
                  </span>
                </div>
                {selectedLang.lang === lang.lang && (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true">
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LangSelector;
