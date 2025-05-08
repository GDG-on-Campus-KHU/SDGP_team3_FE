import React from "react";
import { motion } from "framer-motion";

const PostCard = () => {
  // 테스트를 위한 더미 데이터
  const decorations = [
    { is_equipped: true, type: "terrain", name: "blue-terrain" },
    { is_equipped: true, type: "sky", name: "blue-sky" },
    { is_equipped: true, type: "clouds", name: "clouds" },
    { is_equipped: true, type: "rainbow", name: "rainbow" },
    { is_equipped: true, type: "grass", name: "grass" },
    { is_equipped: true, type: "animal", name: "bird" },
    { is_equipped: true, type: "animal", name: "rabbit" },
    // { is_equipped: true, type: "flower", name: "lavender" },
    { is_equipped: true, type: "flower", name: "daisy" },
    { is_equipped: true, type: "flower", name: "tulips" },
    // { is_equipped: true, type: "tree", name: "tree" },
    { is_equipped: true, type: "tree", name: "apple-tree" },
  ];

  const equippedAssets = decorations.filter((d) => d.is_equipped);

  const getStyle = (type, name) => {
    switch (type) {
      case "sky":
        return { zIndex: 0, top: 0, left: 0, width: "100%", height: "auto" };
      case "terrain":
        return {
          zIndex: 10,
          bottom: 0,
          left: 0,
          width: "100%",
          height: "auto",
        };
      case "clouds":
        return {
          zIndex: 20,
          top: "20px",
          left: "70px",
          width: "70%",
          height: "auto",
        };
      case "rainbow":
        return {
          zIndex: 7,
          top: "100px",
          right: "0px",
          width: "60%",
          height: "auto",
        };
      case "grass":
        return {
          zIndex: 50,
          bottom: "52px",
          right: "20px",
          width: "10%",
          height: "auto",
        };
      case "tree":
        if (name === "tree")
          return {
            zIndex: 20,
            bottom: "60px",
            left: "5px",
            width: "40%",
            height: "auto",
          };
        if (name === "apple-tree")
          return {
            zIndex: 25,
            bottom: "50px",
            left: "30px",
            width: "40%",
            height: "auto",
          };
      case "flower":
        if (name === "lavender")
          return {
            zIndex: 200,
            bottom: "0px",
            left: "100px",
            width: "13%",
            height: "auto",
          };
        if (name === "daisy")
          return {
            zIndex: 200,
            bottom: "0px",
            left: "140px",
            width: "13%",
            height: "auto",
          };
        if (name === "tulips")
          return {
            zIndex: 200,
            bottom: "0px",
            left: "60px",
            width: "13%",
            height: "auto",
          };
      case "animal":
        if (name === "bird")
          return {
            zIndex: 50,
            top: "100px",
            left: "50px",
            width: "15%",
            height: "auto",
          };
        if (name === "rabbit")
          return {
            zIndex: 100,
            bottom: "30px",
            right: "70px",
            width: "20%",
            height: "auto",
          };
        break;
      default:
        return { zIndex: 5 };
    }
  };

  return (
    <div className="flex justify-center px-4 py-8">
      <motion.div
        className="w-full max-w-md h-[600px] flex flex-col"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full max-w-md h-[600px] bg-white shadow-xl rounded-3xl p-6 border border-gray-300 flex flex-col">
          <div className="w-full h-[450px] bg-white border border-gray-300 overflow-hidden relative">
            {equippedAssets.map((decoration, index) => {
              const assetPath = `/decorations/${decoration.type}/${decoration.name}.svg`;
              const style = {
                position: "absolute",
                objectFit: "contain",
                ...getStyle(decoration.type, decoration.name),
              };

              // 애니메이션 조건
              const isClouds = decoration.type === "clouds";
              const isBird =
                decoration.type === "animal" && decoration.name === "bird";

              return isClouds || isBird ? (
                <motion.img
                  key={index}
                  src={assetPath}
                  alt={decoration.name}
                  style={style}
                  animate={
                    isClouds
                      ? { x: [0, 20, 0] } // 구름 흔들흔들
                      : { y: [50, 30, 0] } // 새 둥둥
                  }
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "mirror",
                  }}
                />
              ) : (
                <img
                  key={index}
                  src={assetPath}
                  alt={decoration.name}
                  style={style}
                />
              );
            })}
          </div>

          <div className="space-y-6 mb-4">
            <div className="border-b border-gray-300"></div>
            <div className="border-b border-gray-300"></div>
            <div className="border-b border-gray-300"></div>
            <div className="border-b border-gray-300"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PostCard;
