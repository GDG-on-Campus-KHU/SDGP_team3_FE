import axios from "axios";

const BASE_URL = "/api/challenges";

export const getChallenges = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};
