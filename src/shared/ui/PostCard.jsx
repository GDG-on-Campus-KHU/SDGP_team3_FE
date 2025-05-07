import React from "react";

const PostCard = () => {
  const decorations = [
    { is_equipped: true, type: "terrain", name: "blue-terrain" },
    { is_equipped: true, type: "sky", name: "blue-sky" },
    { is_equipped: true, type: "grass", name: "grass" },
    { is_equipped: true, type: "animal", name: "bird" },
    { is_equipped: true, type: "animal", name: "rabbit" },
    { is_equipped: true, type: "flower", name: "flower" },
    { is_equipped: true, type: "tree", name: "apple-tree" },
  ];

  const equippedAssets = decorations.filter(d => d.is_equipped);

  const getStyle = (type, name) => {
    switch (type) {
      case "sky":
        return { zIndex: 0, top: 0, left: 0, width: "100%", height: "auto" };
      case "terrain":
        return { zIndex: 10, bottom: 0, left: 0, width: "100%", height: "auto" };
      case "grass":
        return { zIndex: 50, bottom: "60px", right: "20px", width: "10%", height: "auto" };
      case "tree":
        return { zIndex: name === "apple-tree" ? 25 : 20, bottom: "40px", left: "5%", width: "40%", height: "auto" };
      case "flower":
        return { zIndex: 200, bottom: "0px", left: "100px", width: "13%", height: "auto" };
      case "animal":
        if (name === "bird")
          return { zIndex: 50, top: "100px", left: "50px", width: "15%", height: "auto" };
        if (name === "rabbit")
          return { zIndex: 100, bottom: "30px", right: "70px", width: "20%", height: "auto" };
        break;
      default:
        return { zIndex: 5 };
    }
  };

  return (
    <div className="flex justify-center px-4 py-8">
      <div className="w-full max-w-md h-[600px] bg-white shadow-xl rounded-3xl p-6 border border-gray-300 flex flex-col">
        <div className="w-full h-[450px] bg-white border border-gray-300 overflow-hidden relative">
          {equippedAssets.map((decoration, index) => {
            const assetPath = `/decorations/${decoration.type}/${decoration.name}.svg`;
            const style = {
              position: "absolute",
              objectFit: "contain",
              ...getStyle(decoration.type, decoration.name),
            };

            return (
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
    </div>
  );
};

export default PostCard;