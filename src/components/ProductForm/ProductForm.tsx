import React from "react";
import { useProductStore } from "../../store/useProductStore";
import { InputWithLabel } from "../InputWithLabel";
import { TagsInput } from "../TagsInput";
import { TextAreaWithLabel } from "../TextAreaWithLabel";
import "./styles/ProductForm.css";
import { shallow } from "zustand/shallow";
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
  const { setProductName, setProductDescription, setProductTags } =
    useProductStore();
  return (
    <div className="productform">
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
      <TagsInput onChange={(tags) => setProductTags(tags)} />
    </div>
  );
};

export default ProductForm;
