import axios from "axios";
export const getTargetAudience = async (
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
      max_tokens: 30,
      return_likelihoods: "NONE",
      truncate: "END",
      num_generations: 1,
      temperature: 0.3,
      stop_sequence: "--",
      prompt: `Product Name: Kindle Oasis
Description: The new Kindle Oasis features our best-in-class 7” 300 ppi Paperwhite display using the latest e-ink technology and a sleek ergonomic design with page-turn buttons—perfect for one-handed reading. Introducing adjustable warm light for a richer reading experience in any light.
tags: tablet
Target audiences: people older than 40 years
--
Product Name: Magic Bullet Nutribullet
Description: Magic Bullet's Nutri Bullet NBR-12 12-Piece High-Speed Blender/Mixer System is portable, child-safe, easy-to-use, and effortlessly pulverizes fruits, vegetables, superfoods, and protein shakes into a delicious, smooth texture.
tags: Health
Target audiences: obese people
--
Product Name: AMD Ryzen™ 5 5600 - 6 Core, 12 Thread Unlocked Desktop Processor with Wraith Stealth Cooler
Description: AMD Ryzen™ 5 5600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stey Cooler.
tags: Processor, videogames
Target audiences: gamers
--
Product Name: ${productName}
Description: ${productDescription}
tags: ${tags?.join(", ")}
Target audiences:`,
    },
  };

  const response = await axios.request(options);
  return response.data.generations.map((generation: any) =>
    generation.text.split("--")[0].split("...")[0].trim()
  );
};

/*

Product Name: Kindle Oasis
Description: The new Kindle Oasis features our best-in-class 7” 300 ppi Paperwhite display using the latest e-ink technology and a sleek ergonomic design with page-turn buttons—perfect for one-handed reading. Introducing adjustable warm light for a richer reading experience in any light.
Target audiences: people older than 40 years
--
Product Name: Magic Bullet Nutribullet
Description: Magic Bullet's Nutri Bullet NBR-12 12-Piece High-Speed Blender/Mixer System is portable, child-safe, easy-to-use, and effortlessly pulverizes fruits, vegetables, superfoods, and protein shakes into a delicious, smooth texture.
Target audiences: obese people
--
Product Name: Neutrogena - Retinol Regenerating Face Cream
Description: 1.7-ounce bottle of Neutrogena Rapid Wrinkle Repair Retinol Regenerating Anti-Wrinkle Face and Neck Cream moisturizer helps reveal younger-looking skin by fading the look of deep wrinkles, including crow's feet and forehead and cheek wrinkles
Target audiences:

*/
