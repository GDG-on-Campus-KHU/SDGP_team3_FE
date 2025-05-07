import axios from "axios";

const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;
const BASE_URL = "/challenges";

export const getChallenges = async () => {
  const response = await axios.get(`${SERVER_URL}${BASE_URL}`);
  return response.data;
};
