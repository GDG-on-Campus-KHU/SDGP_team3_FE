import axios from "axios";

const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;
const BASE_URL = "/api/challenges";

export const createChallenges = async (payload) => {
  try {
    const response = await axios.post(`${SERVER_URL}${BASE_URL}`, payload, {
      headers: {
        Authorization: `Bearer Token넣기`,
      },
    });
    console.log("챌린지 생성 성공! : ", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
