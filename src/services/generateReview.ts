import axios from "axios";
export const generateReview = async (
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
      max_tokens: 50,
      return_likelihoods: "NONE",
      truncate: "END",
      num_generations: 5,
      prompt: `Product Name: Kindle Oasis
Description: The new Kindle Oasis features our best-in-class 7” 300 ppi Paperwhite display using the latest e-ink technology and a sleek ergonomic design with page-turn buttons—perfect for one-handed reading. Introducing adjustable warm light for a richer reading experience in any light.
Feel: Good Experience
Tags: darkness, read, technology, light
Review: Yes, it looks good anywhere, even in total darkness. You can modify the light for read, the size of the source, if it is warm or cold light.
--
Product Name: Magic Bullet Nutribullet
Description: Magic Bullet's Nutri Bullet NBR-12 12-Piece High-Speed Blender/Mixer System is portable, child-safe, easy-to-use, and effortlessly pulverizes fruits, vegetables, superfoods, and protein shakes into a delicious, smooth texture.
Feel: Good Experience
Tags: Health, Alimentation, Portable
Review: They really do offer it but the portable product has worked perfectly since the purchase, excellent healthy product and the price for me was fair
--
Product Name: ${productName}
Description: ${productDescription}
Feel: Good Experience
Tags: ${tags?.join(", ")}
Review:`,
    },
  };

  const response = await axios.request(options);
  return response.data.generations.map(
    (generation: any) => generation.text.split("--")[0]
  );
};
