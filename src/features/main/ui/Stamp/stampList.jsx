import React from "react";
import Stamp from "./stamp";
import { CHALLENGE_ICONS } from "@/shared/config/challengeConfig";

export default function StampList({ stamps }) {
  const icons = CHALLENGE_ICONS;

  const TOTAL_SLOTS = 10;
  const stampsToRender = Array.from({ length: TOTAL_SLOTS }, (_, i) =>
    stamps[i] ? stamps[i] : null
  );

  return (
    <>
      {stampsToRender.map((stamp, index) => {
        const matchIcon = stamp
          ? icons.find((icon) => icon.type === stamp.type)
          : null;
        return (
          <div
            key={stamp?.id || `empty-${index + 1}`}
            className="w-10 h-10 bg-background border border-gray-100 rounded-lg"
          >
            <Stamp
              className="w-full h-full"
              matchIcon={matchIcon}
              stamp={stamp}
            />
          </div>
        );
      })}
    </>
  );
}
