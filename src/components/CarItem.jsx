import { LuFuel } from "react-icons/lu";
import { Separator } from "@/components/ui/separator";
import { MdSpeed } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";

export const CarItem = ({ car }) => {
  return (
    <div className=" bg-white rounded-lg border hover:shadow-md cursor-pointer ">
      <p className="absolute m-2 text-sm bg-green-500 rounded-full px-3 pb-1 text-white">
        New
      </p>
      <img src={car?.image} alt={car.name} className="rounded-t-lg" />
      <div className="p-4">
        {/* CARD Content */}
        <h2 className="font-bold text-black text-center text-lg p-4">
          {car.name}
        </h2>
        <Separator />
        {/* Miles || Fuel || Type */}
        <div className="grid grid-cols-3  mt-5 ">
          {/* Fuel Type */}
          <div className="flex flex-col items-center">
            <LuFuel className="text-lg mb-2" />
            <h2 className=" ">{car.miles} Miles</h2>
          </div>

          {/* Miles */}
          <div className="flex flex-col items-center">
            <MdSpeed className="text-lg mb-2" />
            <h2 className=" ">{car.fuelType}</h2>
          </div>

          {/* Gear Type */}
          <div className="flex flex-col items-center">
            <GiGearStickPattern className="text-lg mb-2" />
            <h2 className=" ">{car.gearType}</h2>
          </div>
        </div>
        <Separator className="my-2" />
        {/* PRICE || VIEW DETAILS */}
        <div className="flex items-center justify-between py-3">
          <h2 className="font-bold text-xl">${car.price}</h2>
          <h2 className="text-sm text-primary  flex gap-1 items-center ">
            View Detail
            <MdOpenInNew />
          </h2>
        </div>
      </div>
    </div>
  );
};
