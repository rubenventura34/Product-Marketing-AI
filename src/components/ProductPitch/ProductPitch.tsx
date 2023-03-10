import React, { useEffect } from "react";
import Flag from "react-flagkit";
import useTranslater from "../../hooks/useTranslater.hook";
import { LangSelector } from "../LangSelector";
import "./styles/ProductPitch.css";
export interface ProductPitchInterface {
  pitch: string;
}

const ProductPitch: React.FC<ProductPitchInterface> = ({ pitch }) => {
  const { text, setToLang, setText, loadingTranslation } = useTranslater(
    pitch,
    "en"
  );
  useEffect(() => {
    setText(pitch);
  }, [pitch]);
  return (
    <div className="px-4 py-5 rounded-t sm:px-6">
      <div className="overflow-hidden bg-white shadow dark:bg-gray-800 sm:rounded-md">
        <div className="w-full px-4 py-5 border-b sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
            Product Pitch
          </h3>
          <p className="max-w-2xl mt-1 text-sm text-gray-500 dark:text-gray-200">
            How you could sell the product.
          </p>
        </div>
        <ul className="divide-y divide-gray-200">
          <li>
            <a className="block hover:bg-gray-50 dark:hover:bg-gray-900">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex flex-col items-center justify-between">
                  {text && (
                    <>
                      <LangSelector onChange={setToLang} />
                      <p className="text-gray-700 text-md dark:text-white">
                        {!loadingTranslation ? text : "Translating..."}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductPitch;
