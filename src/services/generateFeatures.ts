import axios from "axios";
export const generateFeatures = async (
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
      max_tokens: 60,
      return_likelihoods: "NONE",
      truncate: "END",
      num_generations: 3,
      temperature: 0.3,
      prompt: `Product Name: CeraVe Vitamin C Serum with Hyaluronic Acid, Skin Whitening Serum for Face
Description: Helps even skin tone and continuously brighten while helping defend against free radicals and providing antioxidant benefits. Smooth, lightweight formula that helps restore skin's protective barrier and improve hydration, leaving skin soft, radiant and healthy-looking.
Tags: product
Feature: Protective packaging -> Protective packaging helps prevent oxidation to maintain product performance. The formula may experience a color change over time, but it will still be effective.
--
Product: Magic Bullet Nutribullet
Description: Magic Bullet's Nutri Bullet NBR-12 12-Piece High-Speed Blender/Mixer System is portable, child-safe, easy-to-use, and effortlessly pulverizes fruits, vegetables, superfoods, and protein shakes into a delicious, smooth texture.
Tags: product
Feature: essential design -> Its simple and intuitive design makes this device a device that you will use every day. Just push, twist and mix. Yes, it's that easy.
--
Product Name: ${productName}
Description: ${productDescription}
Tags: ${tags?.join(", ") || "product"}
Feature:`,
    },
  };

  const response = await axios.request(options);
  return response.data.generations.map((generation: any) => {
    const text = generation.text.split("--")[0];
    const [title, description] = text.split(" -> ");
    return { title, description };
  });
};
