import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../components/Button";
import { InputWithLabel } from "../../components/InputWithLabel";
import { ProductForm } from "../../components/ProductForm";
import { generateFeatures } from "../../services/generateFeatures";
import { generateHero } from "../../services/generateHero";
import { generateReview } from "../../services/generateReview";
import { useProductStore } from "../../store/useProductStore";
import { TemplateOne } from "../../templates/TemplateOne";
import { TemplateTwo } from "../../templates/TemplateTwo";

import "./styles/LandingPage.css";
export interface LandingPageInterface {}
interface IHero {
  title: string;
  description: string;
}
interface IFeature {
  title: string;
  description: string;
}

const LandingPage: React.FC<LandingPageInterface> = () => {
  const result = useRef<HTMLIFrameElement>(null);
  const { name, description, tags } = useProductStore();
  const [hero, setHero] = useState<IHero>({ title: "", description: "" });
  const [features, setFeatures] = useState<IFeature[]>([]);
  const [reviews, setReviews] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fullscreenPreview, setFullscreenPreview] = useState(false);

  const [template, setTemplate] = useState(1);

  const { urlImage, setProductImage } = useProductStore();

  const generateLanding = async () => {
    setIsLoading(true);
    const [generatedHero, generatedFeatures, generatedReviews] =
      await Promise.all([
        generateHero(name, description, tags),
        generateFeatures(name, description, tags),
        generateReview(name, description, tags, 3),
      ]);
    setHero(generatedHero);
    setFeatures(generatedFeatures);
    setReviews(generatedReviews);
    setIsLoading(false);
  };
  const regenerateSection = async (section: string) => {
    setIsLoading(true);
    switch (section) {
      case "hero":
        setHero({ title: "", description: "" });
        const generatedHero = await generateHero(name, description, tags);
        setHero(generatedHero);
        break;
      case "features":
        setFeatures([]);
        const generatedFeatures = await generateFeatures(
          name,
          description,
          tags
        );
        setFeatures(generatedFeatures);
        break;
      case "reviews":
        setReviews([]);
        const generatedReviews = await generateReview(name, description, tags);
        setReviews(generatedReviews);
        break;
      default:
        break;
    }
    setIsLoading(false);
  };
  return (
    <div className="landingpage page">
      <h1 className="sectionTitle">Landing Page</h1>
      <ProductForm />
      <InputWithLabel
        label="Product Image"
        placeholder="Enter url..."
        value={urlImage}
        onChange={(image) => setProductImage(image)}
        required
      />
      <div className="templateSelector">
        <label htmlFor="">Template</label>
        <div className="flex gap-2 justify-center mt-2 flex-wrap">
          <button
            onClick={() => setTemplate(1)}
            className={`templatePreview ${template === 1 && "selected"}`}>
            <img
              src="https://www.tailwind-kit.com/images/sections/homePage2.png"
              alt=""
            />
          </button>
          <button
            onClick={() => setTemplate(2)}
            className={`templatePreview ${template === 2 && "selected"}`}>
            <img
              src="https://www.tailwindtoolbox.com/templates/landing-page.png"
              alt=""
            />
          </button>
        </div>
      </div>
      <br />
      <div className="flex justify-center">
        <Button isLoading={isLoading} onClick={generateLanding}>
          Generate
        </Button>
      </div>
      <br />
      <div
        className={`relative landing-preview ${
          fullscreenPreview && "fullscreen"
        }`}>
        {(hero.title || features.length > 0 || reviews.length > 0) &&
          template === 1 && (
            <TemplateOne
              onRegenerateSection={regenerateSection}
              hero={hero}
              features={features}
              reviews={reviews}
              image={urlImage}
              breakpoint={fullscreenPreview ? "lg" : "sm"}
            />
          )}
        {(hero.title || features.length > 0 || reviews.length > 0) &&
          template === 2 && (
            <TemplateTwo
              image={urlImage}
              reviews={reviews}
              features={features}
              hero={hero}
              breakpoint={fullscreenPreview ? "lg" : "sm"}
            />
          )}
        <span
          onClick={() => {
            setFullscreenPreview(!fullscreenPreview);
          }}
          className="absolute right-0 top-0 text-white"
          style={{
            cursor: "pointer",
            zIndex: 4,
            marginTop: "4em",
            marginRight: "1em",
          }}>
          Full Screen
        </span>
      </div>
      {/*  <iframe
        onLoad={replaceValues}
        src="http://127.0.0.1:5173/switch-template/index.html"
        ref={result}
        style={{
          width: "100%",
          height: "600px",
          borderRadius: ".5em",
        }}></iframe> */}
    </div>
  );
};

export default LandingPage;
