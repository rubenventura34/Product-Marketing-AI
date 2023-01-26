import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { InputWithLabel } from "./components/InputWithLabel";
import { TextAreaWithLabel } from "./components/TextAreaWithLabel";
import { TagsInput } from "./components/TagsInput";
import { Button } from "./components/Button";
import { ReviewItem } from "./components/ReviewItem";
import { generateReview } from "./services/generateReview";

function App() {
  const [review, setReview] = useState();
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
    setReview(reponseReview);
    setIsLoading(false);
  };

  return (
    <div className="App">
      <h1>Product Review Generator</h1>
      <InputWithLabel
        label="Product Name"
        placeholder="Enter product name..."
        onChange={(name) => setProductName(name)}
      />
      <TextAreaWithLabel
        label="Product Description"
        placeholder="Enter product description..."
        onChange={(description) => setProductDescription(description)}
      />
      <TagsInput onChange={(tags) => setProductTags(tags)} />
      <Button onClick={getReview} className="my-4" isLoading={isLoading}>
        Generate
      </Button>
      {review && <ReviewItem user="Juan Pedro">{review}</ReviewItem>}
    </div>
  );
}

export default App;
