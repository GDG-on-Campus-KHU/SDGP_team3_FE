import React from "react";

export default function FooterBackground() {
  return (
    <svg
      className="w-full h-auto max-w-[600px]"
      viewBox="0 0 401 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_155_327)">
        <path
          d="M0 7C0 7 66.2483 7 116 7C183.248 7 164.5 37 200.5 37C236.5 37 216.5 7 285.5 7C354.5 7 401 7 401 7V58H0V7Z"
          fill="#FDFDFD"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_155_327"
          x="0"
          y="0"
          width="401"
          height="59"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-3" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_155_327"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_155_327"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
