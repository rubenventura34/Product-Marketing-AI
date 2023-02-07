import React, { useState } from "react";
import { AdPost } from "../../components/AdPost";
import { Button } from "../../components/Button";
import { InputWithLabel } from "../../components/InputWithLabel";
import { ProductForm } from "../../components/ProductForm";
import { generateAds } from "../../services/generateAdvisement";
import { useProductStore } from "../../store/useProductStore";
import "./styles/AdGeneratorPage.css";
export interface AdGeneratorPageInterface {}

const AdGeneratorPage: React.FC<AdGeneratorPageInterface> = () => {
  const { name, description, tags, urlImage, setProductImage } =
    useProductStore();
  const [isLoading, setIsLoading] = useState(false);
  const [ads, setAds] = useState([]);

  const getAds = async () => {
    setIsLoading(true);
    const result = await generateAds(name, description, tags, 3);
    setAds(result);
    setIsLoading(false);
  };

  return (
    <div className="adgeneratorpage page">
      <h1 className="sectionTitle">Ads Generation</h1>
      <br />
      <p className="text-white">
        Generate ads to promote your product on social media that will engage
        audiences
      </p>
      <ProductForm />
      <InputWithLabel
        label="Product Image"
        placeholder="Enter url..."
        value={urlImage}
        onChange={(image) => setProductImage(image)}
        required
      />
      <div className="flex justify-center">
        <Button isLoading={isLoading} onClick={getAds}>
          Generate
        </Button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg border-b mb-3 font-medium leading-6 text-gray-900 dark:text-white">
          Results:
        </h3>
        <div className="masonry sm:masonry-sm md:masonry-md">
          {ads.map((ad) => (
            <AdPost imgUrl={urlImage || ""} text={ad} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdGeneratorPage;
