import axios from "axios";

const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;

// const TEST_ACCESS_TOKEN = localStorage.getItem("accessToken");

export const getChallenges = async () => {
  const TEST_ACCESS_TOKEN = localStorage.getItem("accessToken");

  try {
    const response = await axios.get(`${SERVER_URL}/api/challenges`, {
      headers: {
        Authorization: `Bearer ${TEST_ACCESS_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
