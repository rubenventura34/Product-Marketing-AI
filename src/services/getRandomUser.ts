import axios from "axios";

export const getRandomUser = async () => {
  const randomId = Math.floor(Math.random() * (100 - 1) + 1);
  const user = await (
    await axios.get(
      `https://dummyjson.com/users/${randomId}?select=firstName,lastName,image`
    )
  ).data;
  return user;
};
