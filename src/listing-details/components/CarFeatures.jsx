import { FaCheck } from "react-icons/fa6";
const CarFeatures = ({ features }) => {
  return (
    <>
      {features ? (
        <div className="p-5 rounded-xl bg-white mt-2 border shadow-md">
          <h2 className="my-2 font-medium text-2xl">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-2 gap-4 mt-5">
            {Object.entries(features).map(([feature, value], index) => (
              <div key={index} className="flex items-center gap-2">
                <FaCheck className="text-primary text-lg bg-blue-100 rounded-full md:rounded-xl p-1" />{" "}
                <p className="capitalize">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full h-[300px] bg-slate-200 animate-pulse rounded-xl mt-6"></div>
      )}
    </>
  );
};

export default CarFeatures;
