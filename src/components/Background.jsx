import React from "react";

const Background = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-300 via-pink-200 to-pink-500">
      {/* Add background animations or patterns here */}
      <div className="absolute inset-0 opacity-20 bg-[url('/path-to-your-background-image.jpg')] bg-cover bg-center"></div>
    </div>
  );
};

export default Background;
