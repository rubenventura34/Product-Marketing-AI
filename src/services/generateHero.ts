import axios from "axios";
export const generateHero = async (
  productName: string,
  productDescription: string,
  tags?: string[]
) => {
  const options = {
    method: "POST",
    url: "https://api.cohere.ai/generate",
    headers: {
      accept: "application/json",
      "Cohere-Version": "2022-12-06",
      "content-type": "application/json",
      authorization: `Bearer ${import.meta.env.VITE_COHERE_API_KEY}`,
    },
    data: {
      max_tokens: 34,
      return_likelihoods: "NONE",
      truncate: "END",
      num_generations: 1,
      temperature: 0.3,
      prompt: `Product: Slim pad
Description: Increase muscle mass and tone the buttocks with the Slim Pad electrostimulation system, with the low-intensity electrical impulses that it generates in its power sources causes involuntary contraction of the muscles, improving blood flow and reducing fat deposits.
Hero: mold your body -> Increase muscle mass and tone the buttocks with the Slim Pad electrostimulation system with sessions of 20 minutes a day and with 15 intensity levels.
--
Product: Jade Cook
Description: The Neware Jade Eurocook 4-Piece Set includes two (2) frying pans and one (1) stockpot with a tempered glass lid, ideal for casseroles. Each aluminum casserole/stockpot is sealed with a ceramic and jade powder coat finish to provide a highly reinforced surface that provides even heat conduction with maximum strength, resulting in faster, healthier meal preparations
Hero: Cook what you want! -> Prepare all kinds of dishes with the quality and technology of the most complete line of professional kitchen Jade Cook.
--
Product Name: ${productName}
Description: ${productDescription}
Tags: ${tags?.join(", ")}
Hero:`,
    },
  };

  const response = await axios.request(options);
  const text = response.data.generations[0].text.split("--")[0];
  const [title, description] = text.split(" -> ");
  return { title, description };
};
