import React from "react";

export default function TopSection({ title, description }) {
  return (
    <div className="bg-background fixed w-full px-5">
      <p className="text-black text-title-01 py-3">{title}</p>
      <p className="text-gray-700 text-body-02 pb-4 whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}
