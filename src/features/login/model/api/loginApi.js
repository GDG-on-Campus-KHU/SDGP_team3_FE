export const postLogin = async () => {
  try {
    const response = await axios.post(
      `http://kkook.shop:8000/api/users/login`,
      // `http://34.47.95.64:8000/api/users/login`,
      {
        email: "ket0826@gmail.com",
        password: "abcd1234",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    localStorage.setItem("accessToken", response.data.access_token);
    localStorage.setItem("accessToken");

    return response.data;
  } catch (error) {
    console.log("error : ", error);
  }
};
export const postToken = async () => {
  try {
    const params = new URLSearchParams();
    params.append("username", "ket0826@gmail.com");
    params.append("password", "abcd1234");

    const response = await axios.post(
      `http://kkook.shop:8000/api/users/token`,
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log("토큰 발급! : ", response.data);
    localStorage.setItem("accessToken", response.data.access_token);
    navigate("/main");
    return response.data;
  } catch (error) {
    console.log("error : ", error);
  }
};
