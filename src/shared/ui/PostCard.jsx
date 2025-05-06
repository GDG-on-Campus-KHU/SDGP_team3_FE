import React from "react";

const PostCard = () => {
  return (
    <div className="flex justify-center px-4 py-8">
      <div className="w-full max-w-md h-[600px] bg-white shadow-xl rounded-3xl p-6 border border-gray-300 flex flex-col">
        <div className="w-full h-[450px] bg-white border border-gray-300 overflow-hidden flex items-center justify-center mt-6 mb-6">
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