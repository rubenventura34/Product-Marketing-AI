import React, { useState } from "react";
import { BiDotsHorizontalRounded, BiWorld } from "react-icons/bi";
import { generateRandomColor } from "../../utils/generateRandomColor";
import "./styles/AdPost.css";
export interface AdPostInterface {
  imgUrl: string;
  text: string;
}

const AdPost: React.FC<AdPostInterface> = ({ text, imgUrl }) => {
  const [randomColor] = useState(generateRandomColor());
  return (
    <div className="w-full break-inside rounded bg-white p-4 shadow-lg dark:bg-gray-700">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center">
          <span className="relative rounded-xl bg-blue-100 p-2 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700 w-10 h-10"></span>
          <div className="flex flex-col">
            <span className="text-md ml-2 text-sm font-bold text-black dark:text-white">
              {" "}
              COMPANY.COM{" "}
            </span>
            <span className="ml-2 text-xs text-gray-500 dark:text-white flex items-center">
              {" "}
              Sponsored - &nbsp;
              <BiWorld />
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <a className="text-gray-200">
            <BiDotsHorizontalRounded />
          </a>
        </div>
      </div>
      <div>
        <p className="dark:text-white mb-2 text-sm text-left">{text}</p>
      </div>
      <div className="-mx-4 -mb-4">
        <div className="p-3" style={{ backgroundColor: randomColor }}>
          <img
            onError={(evt) =>
              (evt.currentTarget.src =
                "https://placeholder.com/assets/images/150x150-2-500x500.png")
            }
            src={imgUrl}
            className="w-100"
          />
        </div>
        <div className="flex bg-gray-300 p-2">
          <div className="flex-1 font-semibold flex items-center text-gray-700">
            Contact US
          </div>
          <button className="border-[1px] p-1 border-gray-600 text-gray-700 rounded">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdPost;
