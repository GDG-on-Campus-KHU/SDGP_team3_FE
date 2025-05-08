import axios from "axios";

const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;

const TEST_ACCESS_TOKEN = localStorage.getItem("accessToken");

export const getChallenges = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/api/challenges`, {
      headers: {
        Authorization: `Bearer ${TEST_ACCESS_TOKEN}`,
      },
    });
    console.log("챌린지 조회 성공! : ", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
