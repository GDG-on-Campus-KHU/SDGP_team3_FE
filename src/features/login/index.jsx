import React, { useEffect, useState } from "react";
import Splash from "./ui/splash";
import LoginUi from "./ui/loginUi";
import axios from "axios";

export default function Login() {
  const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;

  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

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
        <LoginUi />
      )}
    </div>
  );
}
