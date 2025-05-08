import axios from "axios";

const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;

// const TEST_ACCESS_TOKEN = localStorage.getItem("accessToken");

export const getStamps = async () => {
  const TEST_ACCESS_TOKEN = localStorage.getItem("accessToken");

  try {
    const response = await axios.get(`${SERVER_URL}/api/stamps`, {
      headers: {
        Authorization: `Bearer ${TEST_ACCESS_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const certificateStamp = async (photoFile, id, type) => {
  const TEST_ACCESS_TOKEN = localStorage.getItem("accessToken");
  const uid = localStorage.getItem("uid");
  const savedAt = new Date().toISOString();

  const formData = new FormData();
  formData.append("saved_at", savedAt);
  formData.append("uid", uid);
  formData.append("challenges_ids_json", JSON.stringify(id));
  formData.append("file", photoFile);

  try {
    const response = await axios.post(
      `${SERVER_URL}/api/stamps/${type}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${TEST_ACCESS_TOKEN}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
