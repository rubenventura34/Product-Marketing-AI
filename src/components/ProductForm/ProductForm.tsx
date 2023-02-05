import React from "react";
import { useProductStore } from "../../store/useProductStore";
import { InputWithLabel } from "../InputWithLabel";
import { TagsInput } from "../TagsInput";
import { TextAreaWithLabel } from "../TextAreaWithLabel";
import "./styles/ProductForm.css";
import { shallow } from "zustand/shallow";
import { BiBulb } from "react-icons/bi";
export interface ProductFormInterface {}

const ProductForm: React.FC<ProductFormInterface> = () => {
  const { name, description, tags } = useProductStore(
    (state) => ({
      name: state.name,
      description: state.description,
      tags: state.tags,
    }),
    shallow
  );
  const {
    setProductName,
    setProductDescription,
    setExample,
    addTag,
    removeTag,
  } = useProductStore();
  return (
    <div className="productform">
      <div className="flex justify-end">
        <button
          type="button"
          className="py-1 px-2 flex justify-center items-center hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  w-12 h-12 rounded-lg"
          onClick={() => setExample()}>
          <BiBulb />
        </button>
      </div>
      <InputWithLabel
        label="Product Name"
        placeholder="Enter product name..."
        value={name}
        onChange={(name) => setProductName(name)}
        required
      />
      <TextAreaWithLabel
        required
        value={description}
        label="Product Description"
        placeholder="Enter product description..."
        onChange={(description) => setProductDescription(description)}
      />
      <TagsInput tags={tags} onAdd={addTag} onRemove={removeTag} />
    </div>
  );
};

export default ProductForm;
