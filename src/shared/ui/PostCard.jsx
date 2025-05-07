import React from "react";

const PostCard = () => {
  // 하드코딩된 테스트용 데코레이션
  const decorations = [
    { is_equipped: true, type: "terrain", name: "dark-terrain" },
    { is_equipped: true, type: "sky", name: "dark-sky" },
    { is_equipped: true, type: "grass", name: "grass" },
  ];

  const equippedAssets = decorations.filter((decoration) => decoration.is_equipped);

  return (
    <div className="flex justify-center px-4 py-8">
      <div className="w-full max-w-md h-[600px] bg-white shadow-xl rounded-3xl p-6 border border-gray-300 flex flex-col">
        <div className="w-full h-[450px] bg-white border border-gray-300 overflow-hidden flex items-center justify-center mt-6 mb-6 relative">
          {equippedAssets.map((decoration, index) => {
            const assetPath = `/decorations/${decoration.type}/${decoration.name}.svg`;
            return (
              <img
                key={index}
                src={assetPath}
                alt={decoration.name}
                className={`absolute top-0 left-0 object-cover ${
                  decoration.type === "sky"
                    ? "z-10"
                    : decoration.type === "terrain"
                    ? "z-20"
                    : decoration.type === "tree"
                    ? "z-30"
                    : decoration.type === "grass"
                    ? "z-40"
                    : decoration.type === "flower"
                    ? "z-50"
                    : "z-60" // animal
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostCard;