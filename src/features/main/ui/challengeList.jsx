import React from "react";
import ProgressBar from "../../../shared/ui/progressBar";
import { Btn } from "../../../shared/ui/button";
import ChallengeCard from "../../../shared/ui/ChallengeCard";

export default function ChallengeList({ list, icons }) {
  return (
    <>
      {list.map((challenge, index) => {
        return (
          <div key={challenge.id}>
            <ChallengeCard challenge={challenge} />
          </div>
        );
      })}
    </>
  );
}
