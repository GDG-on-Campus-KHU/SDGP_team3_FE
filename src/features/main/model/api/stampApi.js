import axios from "axios";

const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;

const TEST_ACCESS_TOKEN = localStorage.getItem("accessToken");

export const getStamps = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/stamps`, {
      headers: {
        Authorization: `Bearer ${TEST_ACCESS_TOKEN}`,
      },
    });
    console.log("스탬프 조회 성공! : ", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
