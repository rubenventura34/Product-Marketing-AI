import React, { useState } from "react";
import { Button } from "../../components/Button";
import { ProductForm } from "../../components/ProductForm";
import { TargetAudienceList } from "../../components/TargetAudienceList";
import { getTargetAudience } from "../../services/getTargetAudience";
import { useProductStore } from "../../store/useProductStore";
import "./styles/TargetAudiencePage.css";
export interface TargetAudiencePageInterface {}

const TargetAudiencePage: React.FC<TargetAudiencePageInterface> = () => {
  const [targetAudience, setTargetAudience] = useState([]);
  const { name, description, tags } = useProductStore();
  const [isLoading, setIsLoading] = useState(false);

  const getAudience = async () => {
    setIsLoading(true);
    const aducience = await getTargetAudience(name, description, tags);
    setTargetAudience(aducience);
    setIsLoading(false);
  };
  return (
    <div className="targetaudiencepage">
      <h1 className="sectionTitle">Target Audience</h1>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
        }}>
        <ProductForm />
        <div className="flex justify-center">
          <Button
            isLoading={isLoading}
            onClick={getAudience}
            type="submit"
            className="my-4">
            Identify
          </Button>
        </div>
      </form>
      <TargetAudienceList audience={targetAudience} />
    </div>
  );
};

export default TargetAudiencePage;
