import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { InputWithLabel } from "./components/InputWithLabel";
import { TextAreaWithLabel } from "./components/TextAreaWithLabel";
import { TagsInput } from "./components/TagsInput";
import { Button } from "./components/Button";
import { ReviewItem } from "./components/ReviewItem";
import { generateReview } from "./services/generateReview";
import { Navbar } from "./components/Navbar";
import { ProductForm } from "./components/ProductForm";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { ReviewGeneratorPage } from "./pages/ReviewGeneratorPage";
import { TargetAudiencePage } from "./pages/TargetAudiencePage";
import { ProductPitchPage } from "./pages/ProductPitchPage";
import { LandingPage } from "./pages/LandingPage";
import { HomePage } from "./pages/HomePage";
import { AdGeneratorPage } from "./pages/AdGeneratorPage";

function App() {
  const [reviews, setReviews] = useState([]);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productTags, setProductTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const getReview = async () => {
    setIsLoading(true);
    const reponseReview = await generateReview(
      productName,
      productDescription,
      productTags
    );
    setReviews(reponseReview);
    setIsLoading(false);
  };

  return (
    <div className="App">
      {/* <h1
        style={{ color: "#dddd6f", fontWeight: "bold", marginBottom: ".5em" }}>
        Product Review
        <br />
        Generator
      </h1>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          getReview();
        }}>
        <InputWithLabel
          label="Product Name"
          placeholder="Enter product name..."
          onChange={(name) => setProductName(name)}
          required
        />
        <TextAreaWithLabel
          required
          label="Product Description"
          placeholder="Enter product description..."
          onChange={(description) => setProductDescription(description)}
        />
        <TagsInput onChange={(tags) => setProductTags(tags)} />
        <div className="flex justify-center">
          <Button type="submit" className="my-4" isLoading={isLoading}>
            Generate
          </Button>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {reviews &&
            reviews.map((review, idx) => (
              <ReviewItem key={idx} user="Juan Pedro">
                {review}
              </ReviewItem>
            ))}
        </div>
      </form> */}
      <BrowserRouter>
        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/target-audience" element={<TargetAudiencePage />} />
          <Route path="/ad-generator" element={<AdGeneratorPage />} />
          <Route path="/reviews-generator" element={<ReviewGeneratorPage />} />
          <Route path="/product-pitch" element={<ProductPitchPage />} />
          <Route path="/landing-page" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
