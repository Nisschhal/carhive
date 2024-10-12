import Header from "@/components/Header";
import { HiCalendarDays } from "react-icons/hi2";
import { BsSpeedometer2 } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";
import { FaGasPump } from "react-icons/fa";
const DetailHeader = ({ carDetails }) => {
  console.log(carDetails);
  return (
    <div>
      <Header />
      {/* Car Heading */}
      <div className="p-10 md:px-20">
        {carDetails?.listingTitle ? (
          <div>
            <h2 className="text-3xl font-bold ">{carDetails?.listingTitle}</h2>
            <p className="text-lg text-slate-700 py-3">{carDetails?.tagline}</p>
            {/* Car Info */}
            <div className="flex gap-2 mt-3">
              {/* Info 1 */}
              <div className="flex items-center gap-1 bg-blue-100 rounded-full p-1 px-3 ">
                <HiCalendarDays className="size-5 text-primary" />
                <h2 className="text-primary text-sm">{carDetails?.year}</h2>
              </div>
              {/* Info 2 */}
              <div className="flex items-center gap-1 bg-blue-100 rounded-full p-1 px-3 ">
                <BsSpeedometer2 className="size-5 text-primary" />
                <h2 className="text-primary text-sm">{carDetails?.mileage}</h2>
              </div>
              {/* Info 3 */}
              <div className="flex items-center gap-1 bg-blue-100 rounded-full p-1 px-3 ">
                <TbManualGearbox className="size-5 text-primary" />
                <h2 className="text-primary text-sm">
                  {carDetails?.transmission}
                </h2>
              </div>
              {/* Info 4 */}
              <div className="flex items-center gap-1 bg-blue-100 rounded-full p-1 px-3 ">
                <FaGasPump className="size-5 text-primary" />
                <h2 className="text-primary text-sm">{carDetails?.fuelType}</h2>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[150px] w-full rounded-xl bg-slate-200 animate-pulse"></div>
        )}
      </div>
    </div>
  );
};

export default DetailHeader;
