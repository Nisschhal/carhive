import { LuFuel } from "react-icons/lu";
import { Separator } from "@/components/ui/separator";
import { MdSpeed } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";
import { useLocation } from "react-router-dom";

export const CarItem = ({ car }) => {
  const { pathname } = useLocation();
  return (
    <div className=" bg-white rounded-lg border hover:drop-shadow-lg cursor-pointer transition duration-200">
      {pathname == "/" && (
        <p className="absolute m-2 text-xs md:text-base bg-green-500 rounded-full px-3 pb-1 text-white">
          New
        </p>
      )}
      <img
        src={car?.images[0]?.imageUrl}
        alt={car?.name}
        className="rounded-t-lg w-full h-[180px] object-cover"
      />
      <div className="p-4">
        {/* CARD Content */}
        <h2 className="flex font-bold text-black text-center md:text-lg lg:text-xl p-4   ">
          {car?.listingTitle}
        </h2>
        <Separator />
        {/* Miles || Fuel || Type */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3  mt-5  ">
          {/* Fuel Type */}
          <div className="flex flex-col  items-center ">
            <LuFuel className="text-sm md:text-base lg:text-lg mb-2" />
            <h2 className="text-xs md:text-sm lg:text-base text-center">
              {car?.miles} Miles
            </h2>
          </div>

          {/* Miles */}
          <div className="flex flex-col items-center">
            <MdSpeed className="text-sm md:text-base lg:text-lg mb-2" />
            <h2 className=" text-xs md:text-sm lg:text-base text-center">
              {car?.fuelType}
            </h2>
          </div>

          {/* Gear Type */}
          <div className="flex flex-col items-center">
            <GiGearStickPattern className="text-sm md:text-base lg:text-lg mb-2" />
            <h2 className=" text-xs md:text-sm lg:text-base text-center">
              {car?.transmission}
            </h2>
          </div>
        </div>
        <Separator className="my-2" />
        {/* PRICE || VIEW DETAILS */}
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between py-3">
          <h2 className="font-bold text-xs md:text-xl">${car?.sellingPrice}</h2>
          <h2 className="text-[8px] md:text-sm text-primary flex md:gap-1 items-center hover:underline ">
            View Detail
            <MdOpenInNew />
          </h2>
        </div>
      </div>
    </div>
  );
};
