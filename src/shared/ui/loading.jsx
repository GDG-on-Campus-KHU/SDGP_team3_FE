import Lottie from "lottie-react";
import React from "react";
import loadingAnimation from "../../assets/loading.json";

export default function Loading() {
  return (
    <div style={{ width: "16rem", height: "16rem" }}>
      <Lottie loop={true} animationData={loadingAnimation} />
    </div>
  );
}
