import React from "react";
import Search from "./Search";

const Hero = () => {
  return (
    <>
      {/* Hero Text */}
      <div className="flex-1 flex text-center items-center flex-col p-10 py-20 gap-6 h-[600px] w-full bg-[#eef0fc]">
        <h2 className="text-lg md:text-lg  ">
          Find car for sale and for rent near you
        </h2>
        <h2 className="text-3xl md:text-[60px] font-bold">
          Find your dream car
        </h2>

        {/* Search  && Car Image*/}
        <Search />
        <img src="/tesla.png" alt="" className="mt-6" />
      </div>
    </>
  );
};

export default Hero;
