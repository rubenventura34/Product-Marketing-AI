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
Target audience: people older than 40 years

--
Product Name: Magic Bullet Nutribullet
Description: Magic Bullet's Nutri Bullet NBR-12 12-Piece High-Speed Blender/Mixer System is portable, child-safe, easy-to-use, and effortlessly pulverizes fruits, vegetables, superfoods, and protein shakes into a delicious, smooth texture.
tags: Health
Target audience: obese people

--
Product Name: AMD Ryzen™ 5 5600 - 6 Core, 12 Thread Unlocked Desktop Processor with Wraith Stealth Cooler
Description: It can deliver fast 100 FPS performance in the world's most popular games, discrete graphics card required 6 cores and 12 processing threads, bundled with the AMD Wraith Stealth cooler. 4.4 GHz max boost, unlocked for overclocking, 35MB cache, DDR4-3200 support
tags: Processor, videogames
Target audience: Gamers and designers

--
Product Name: Coleman Cabin Tent with Instant Setup in 60 Seconds
Description: The Coleman Instant Cabin makes getting camp set up quicker and easier than ever. This instant tent has pre-attached poles that make setting up camp as simple as unfolding, extending, and securing. You can assemble the tent in about a minute and then get started on your adventure.
tags: camping, nature, ball, family
Target audience: backpackers and hikers

--
Product Name: ${productName}
Description: ${productDescription}
tags: ${tags?.join(", ")}
Target audience:`,
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
