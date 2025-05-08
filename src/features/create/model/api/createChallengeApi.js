import axios from "axios";

const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;
const BASE_URL = "/api/challenges";

const TEST_ACCESS_TOKEN = localStorage.getItem("accessToken");

export const createChallenges = async (payload) => {
  try {
    const response = await axios.post(`${SERVER_URL}/api/challenges`, payload, {
      headers: {
        Authorization: `Bearer ${TEST_ACCESS_TOKEN}`,
      },
    });
    console.log("챌린지 생성 성공! : ", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
