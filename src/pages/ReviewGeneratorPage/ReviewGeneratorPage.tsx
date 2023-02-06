import React, { useState } from "react";
import { Button } from "../../components/Button";
import { InputWithLabel } from "../../components/InputWithLabel";
import { ProductForm } from "../../components/ProductForm";
import { ReviewItem } from "../../components/ReviewItem";
import { TagsInput } from "../../components/TagsInput";
import { TextAreaWithLabel } from "../../components/TextAreaWithLabel";
import { generateReview } from "../../services/generateReview";
import { useProductStore } from "../../store/useProductStore";
import "./styles/ReviewGeneratorPage.css";
export interface ReviewGeneratorPageInterface {}

const ReviewGeneratorPage: React.FC<ReviewGeneratorPageInterface> = () => {
  const [reviews, setReviews] = useState([]);
  const { name, description, tags } = useProductStore();
  const [isLoading, setIsLoading] = useState(false);
  const getReview = async () => {
    setIsLoading(true);
    const reponseReview = await generateReview(name, description, tags);
    setReviews(reponseReview);
    setIsLoading(false);
  };
  return (
    <div className="reviewgeneratorpage page">
      <h1 className="sectionTitle">
        Product Review
        <br />
        Generator
      </h1>
      <p className="text-white">
        You already have a landing page but you still do not have customers who
        rate your product, show these reviews on a website to generate interest.
      </p>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          getReview();
        }}>
        <ProductForm />
        <div className="flex justify-center">
          <Button type="submit" className="my-4" isLoading={isLoading}>
            Generate
          </Button>
        </div>
        <div className="masonry sm:masonry-sm md:masonry-sm">
          {reviews &&
            reviews.map((review, idx) => (
              <ReviewItem key={idx} user="Juan Pedro">
                {review}
              </ReviewItem>
            ))}
        </div>
      </form>
    </div>
  );
};

export default ReviewGeneratorPage;
