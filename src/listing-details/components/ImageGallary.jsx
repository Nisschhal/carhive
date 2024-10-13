import React from "react";

const ImageGallary = ({ carDetails }) => {
  console.log("car details", carDetails);
  return (
    <div className="py-2">
      <img
        src={carDetails?.images[0]?.imageUrl}
        alt=""
        className="w-full h-[500px] object-cover rounded-xl"
      />
    </div>
  );
};

export default ImageGallary;
