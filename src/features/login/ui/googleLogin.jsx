import { GoogleLogin } from "@react-oauth/google";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function GoogleAuthLogin() {
  const navigate = useNavigate();
  return (
    <GoogleLogin
      onSuccess={(res) => {
        console.log("구글 로그인 성공 : ", res);
        console.log(success);
        navigate("/main");
      }}
      onError={(err) => {
        console.log(err);
      }}
    />
  );
}
