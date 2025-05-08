import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "./dialog";
import { Btn } from "../button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DECORATION_DATAS = [
  { name: "새", src: "/decorations/animal/bird.svg", postposition: "를" },
  { name: "토끼", src: "/decorations/animal/rabbit.svg", postposition: "를" },
  {
    name: "구름",
    src: "/decorations/clouds/clouds.svg",
    postposition: "을",
  },
  { name: "데이지", src: "/decorations/flower/daisy.svg", postposition: "를" },
  // {
  //   name: "라벤더",
  //   src: "/decorations/flower/lavender.svg",
  //   postposition: "를",
  // },
  { name: "튤립", src: "/decorations/flower/tulips.svg", postposition: "을" },
  { name: "잔디", src: "/decorations/grass/grass.svg", postposition: "를" },
  {
    name: "무지개",
    src: "/decorations/rainbow/rainbow.svg",
    postposition: "를",
  },
  {
    name: "사과나무",
    src: "/decorations/tree/apple-tree.svg",
    postposition: "를",
  },
  // { name: "나무", src: "/decorations/tree/tree.svg", postposition: "를" },
];

export default function AssetDialog({ isOpen, onOpenChange }) {
  const [decoration, setDecoration] = useState({
    name: "잔디",
    src: "/decorations/grass/grass.svg",
    postposition: "를",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      const random =
        DECORATION_DATAS[Math.floor(Math.random() * DECORATION_DATAS.length)];
      setDecoration(random);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen ?? false} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-4 justify-center items-center">
          <img
            className="w-24 h-auto"
            src={decoration.src}
            alt={`${decoration.name} 아이콘`}
          />
          <DialogTitle>{`${decoration.name}${decoration.postposition} 획득했어요!`}</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Btn className="w-fit" onClick={() => navigate("/world")}>
            나의 세계로 가기
          </Btn>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
