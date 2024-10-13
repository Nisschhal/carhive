const CarDescription = ({ carDetails }) => {
  return (
    <>
      {carDetails?.listingDescription ? (
        <div className="p-5 rounded-xl bg-white mt-6 border shadow-md">
          <h2 className="my-2 font-medium text-2xl">Description</h2>
          <p className=" ">{carDetails?.listingDescription}</p>
        </div>
      ) : (
        <div className="w-full h-[120px] bg-slate-200 animate-pulse rounded-xl mt-6"></div>
      )}
    </>
  );
};

export default CarDescription;
