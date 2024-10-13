import IconField from "@/addList/component/IconField";
import carSpecification from "@/shared/carSpecification";

const CarSpecification = ({ carDetails }) => {
  return (
    <div className="p-5 px-10 rounded-xl border shadow-md my-7">
      <h2 className="font-medium text-2xl">Specifications</h2>
      {carDetails ? (
        carSpecification.map((item, index) => (
          <div key={index} className="flex justify-between mt-5 ">
            <div className="flex items-center gap-2">
              <IconField icon={carSpecification[index]?.icon} />
              {item?.label}
            </div>
            <p>{carDetails[item?.name]}</p>
          </div>
        ))
      ) : (
        <div className="w-full h-[500px] rounded-xl bg-slate-200 animate-pulse mt-3"></div>
      )}
    </div>
  );
};

export default CarSpecification;
