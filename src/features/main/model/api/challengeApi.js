import axios from "axios";

const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;
const BASE_URL = "/challenges";

export const getChallenges = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}${BASE_URL}`, {
      headers: {
        Authorization: `Bearer Token넣기`,
      },
    });
    console.log("챌린지 조회 성공! : ", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
