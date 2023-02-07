import axios from "axios";
export const generateAds = async (
  productName: string,
  productDescription: string,
  tags?: string[],
  len: number = 5
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
      max_tokens: 108,
      return_likelihoods: "NONE",
      truncate: "END",
      num_generations: len,
      temperature: 0.7,
      prompt: `Product Name: DELL VOSTRO 3400 LAPTOP
Description: The 14-inch Vostro 3400 laptop from Dell's Vostro 3000 family comes packed with all the latest technology, including DDR4 memory locked to a whopping 3200 MHz and an 11th generation Intel 4-core processor. The quad cores of the Core i5-1135G7 processor allow for exceptional multitasking.
Tags: laptop
Generate Ad: 🥳 NEW INCOME! 🤩 Experience productivity without interruptions with the DELL VOSTRO 3400 LAPTOP, its 11th INTEL CORE i3 processor and its 14.0" size will allow you to take it with you at any time and carry out your activities without complications 😎
🚛 SHIPPING AVAILABLE TO THE WHOLE COUNTRY
--
Product Name: Magic Bullet's Nutri Bullet NBR-12
Description: Magic Bullet's Nutri Bullet NBR-12 12-Piece High-Speed Blender/Mixer System is portable, child-safe, easy-to-use, and effortlessly pulverizes fruits, vegetables, superfoods, and protein shakes into a delicious, smooth texture .
Tags: blender
Generate Ad: We offer you the Nutribullet.
It is a very versatile appliance with which you can cut, mix and grind your food quickly and easily.
Perfect for your new year resolutions, we help you maintain a #fitness life 🤩💫🏋️💪🏽
“It is never too late to change your lifestyle”
🥕🍊🍓🍉
--
Product Name: Micro Color Smartwatch
Description: It is equipped with sensors that allow it to measure the level of oxygen in the blood, the stages of sleep reached by the user, as well as the heart rate, sending an alert if there is any abnormality.
Tags: gadgets
Generate Ad: ⌚️ Are you looking for a new watch? ⌚️ THESE MODELS ARE THE LAST UNITS NOW AVAILABLE! 🤩 It is no longer necessary to look at your notifications from your cell phone, do it from your wrist 😲
📲 You can connect them to your mobile, they are all compatible with iOS and Android 😁 Do you want to know more about the SMARTWATCHes that we have available? Write us on WhatsApp 📲
🛑 VISIT OUR WEBSITE! 🛑
📦 SHIPPING AVAILABLE TO THE WHOLE COUNTRY
--
Product Name: Dell Inspiron 3511
Description: The new Inspiron 15 3511 non-touch laptop is designed to keep you connected, powered by the latest Intel® processors. This laptop is designed with you and the environment in mind, using recycled plastics. Plus, it's Energy Star 8.0 certified and built with an ergonomic lift-hinge design to keep you comfortably connected all day.
Generate Ad: 💻 𝐋𝐀𝐏𝐓𝐎𝐏𝐒 𝐈𝐍𝐒𝐏𝐈𝐑𝐎𝐍 𝐃𝐄𝐋𝐋 💻
The best in next generation Dell laptops!
With the guarantee and prestige that characterize this brand!
Take your notebook with a FREE mouse, offer for a limited time!
Ask us, it will be a pleasure to assist you! 😉
🎯 You can shop online!
--
Product Name: ${productName}
Description: ${productDescription}
Tags: ${tags?.join(", ")}
Generate Ad:`,
    },
  };

  const response = await axios.request(options);
  return response.data.generations.map(
    (generation: any) => generation.text.split("--")[0]
  );
};
