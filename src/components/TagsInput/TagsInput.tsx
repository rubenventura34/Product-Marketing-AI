import React, { useEffect, useState } from "react";
import "./styles/TagsInput.css";
export interface TagsInputInterface {
  tags?: string[];
  onAdd?: (value: string) => void;
  onRemove?: (value: string) => void;
  onChange?: (tags: string[]) => void;
}

const TagsInput: React.FC<TagsInputInterface> = ({
  onChange,
  tags,
  onAdd,
  onRemove,
}) => {
  /*   const [tags, setTags] = useState<string[]>([]);

  const addTag = (tag: string, elem: any) => {
    console.log()
    if (tags.includes(tag)) return;
    setTags([...tags, tag]);
    elem.value = "";
  };
  const removeTag = (tagToDelete: string) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  }; */

  return (
    <div className=" relative ">
      <label>Tags</label>
      <div className="mt-2 flex">
        <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-tag"
            viewBox="0 0 16 16">
            <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z" />
            <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z" />
          </svg>
        </span>
        <input
          type="text"
          onKeyDown={(evt) => {
            if (evt.key === "Enter" || evt.key === ",") {
              evt.preventDefault();
              onAdd && onAdd(evt.currentTarget.value);
              evt.currentTarget.value = "";
            }
          }}
          className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Your tags (optional)"
        />
      </div>

      <div className="mt-3 flex gap-2 flex-wrap justify-center">
        {tags?.map((tag, idx) => (
          <span
            key={idx}
            className="px-4 py-1 text-base rounded-full text-white  bg-indigo-500 ">
            {tag}
            <button
              onClick={() => onRemove && onRemove(tag)}
              className="bg-transparent hover px-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="ml-1"
                viewBox="0 0 1792 1792">
                <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"></path>
              </svg>
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagsInput;
