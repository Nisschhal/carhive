import { Button } from "@/components/ui/button";

const OwnerDetails = ({ carDetails }) => {
  return (
    <div className="p-10 border rounded-xl shadow-md">
      <h2 className="font-medium text-2xl mb-3">Owner/ Deals</h2>
      <img
        src={carDetails?.userImageUrl}
        alt="User Image"
        className="size-[70px] rounded-full"
      />
      <h2 className="mt-2 font-bold text-xl">{carDetails?.userName}</h2>
      <h2 className="mt-2 text-gray-500">{carDetails?.createdBy}</h2>
      <Button className="w-full mt-6">Message Owner</Button>
    </div>
  );
};

export default OwnerDetails;
