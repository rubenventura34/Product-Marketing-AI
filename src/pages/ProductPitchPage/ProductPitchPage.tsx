import React, { useState } from "react";
import { Button } from "../../components/Button";
import { ProductForm } from "../../components/ProductForm";
import { ProductPitch } from "../../components/ProductPitch";
import { generatePitch } from "../../services/generatePitch";
import { useProductStore } from "../../store/useProductStore";
import "./styles/ProductPitchPage.css";
export interface ProductPitchPageInterface {}

const ProductPitchPage: React.FC<ProductPitchPageInterface> = () => {
  const { name, description, tags } = useProductStore();
  const [isLoading, setIsLoading] = useState(false);
  const [pitch, setPitch] = useState("");
  const getPitch = async () => {
    try {
      setIsLoading(true);
      const generatedPitch = await generatePitch(name, description, tags);
      setPitch(generatedPitch);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="productpitchpage page">
      <h1 className="sectionTitle">Product Pitch</h1>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
        }}>
        <ProductForm />
        <div className="flex justify-center">
          <Button
            isLoading={isLoading}
            onClick={getPitch}
            type="submit"
            className="my-4">
            Generate
          </Button>
        </div>
      </form>
      <ProductPitch pitch={pitch} />
    </div>
  );
};

export default ProductPitchPage;
