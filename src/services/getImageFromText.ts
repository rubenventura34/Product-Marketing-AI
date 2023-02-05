import axios from "axios";

export const getImageFromText = async (text: string) => {
  console.log("text", text);
  const QUERY_API_URL = `https://api.unsplash.com/search/photos?page=1&per_page=1&query=${text}&client_id=${
    import.meta.env.VITE_UNSPLASH_API_KEY
  }`;
  const response = await axios.get(QUERY_API_URL);
  const imgURL = response.data.results[0].urls.small;
  return imgURL;
};
