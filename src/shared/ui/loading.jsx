import Lottie from "lottie-react";
import React from "react";
import loadingAnimation from "../../assets/loading.json";
import { cn } from "../lib/utils";

export default function Loading({ className }) {
  return (
    <div
      className={cn(className, "flex justify-center items-center")}
      style={{ width: "16rem", height: "16rem" }}
    >
      <Lottie loop={true} animationData={loadingAnimation} />
    </div>
  );
}
