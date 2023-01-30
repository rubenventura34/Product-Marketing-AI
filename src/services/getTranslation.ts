import axios from "axios";

export const getTranslation = async (
  from: string,
  to: string,
  text: string
) => {
  const result = await axios.post(
    "https://translate.argosopentech.com/translate",
    {
      q: text,
      source: from,
      target: to,
    }
  );
  return result.data.translatedText;
};
