import React, { useEffect, useState } from "react";
import Splash from "./ui/splash";
import LoginUi from "./ui/loginUi";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;

  const G_CLIENT_ID = import.meta.env.VITE_APP_GOOGLE_CLIENT_ID;

  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    const timer2 = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const postRegister = async () => {
    try {
      const response = await axios.post(
        `http://kkook.shop:8000/api/users`,
        {
          email: "ket0825@gmail.com",
          username: "ket0826@gmail.com",
          password: "abcd1234",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("error : ", error);
    }
  };
  // To Do: 파일 분리하기
  const postLogin = async () => {
    try {
      const response = await axios.post(
        `http://kkook.shop:8000/api/users/login`,
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
      localStorage.setItem("uid", response.data.id);
      return response.data;
    } catch (error) {
      console.log("error : ", error);
    }
  };
  const postToken = async () => {
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
      localStorage.setItem("accessToken", response.data.access_token);
      navigate("/main");
      return response.data;
    } catch (error) {
      console.log("error : ", error);
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    clientId: G_CLIENT_ID,
    onSuccess: (res) => {
      localStorage.setItem("accessToken", res.access_token);
      localStorage.setItem("refreshToken", res.refresh_token);
      navigate("/main");
      // 구글 로그인 성공 시 처리할 로직
    },
    onError: (err) => {
      console.log(err);
      // 구글 로그인 실패 시 처리할 로직
    },
  });

  const healthCheck = async () => {
    const res = await axios.get(`${SERVER_URL}/health`);
    console.log(res);
  };
  useEffect(() => {
    healthCheck();
  }, []);

  return (
    <div className="w-full h-dvh flex flex-col gap-3 justify-center items-center relative overflow-hidden">
      {showSplash ? (
        <div
          className={`inset-0 transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <Splash />
        </div>
      ) : (
        <LoginUi
          onClick={() => {
            // postRegister();
            postLogin();
            postToken();
          }}
        />
        // <LoginUi onClick={handleGoogleLogin} />
      )}
    </div>
  );
}
