import { Button } from "@/components/ui/button";
import Service from "@/shared/Service";
import { useUser } from "@clerk/clerk-react";

const OwnerDetails = ({ carDetails }) => {
  const { user } = useUser();
  const handleMessageOwner = async () => {
    // Create Current User Id
    try {
      const userId = user?.primaryEmailAddress.emailAddress.split("@")[0];
      console.log("userid", userId);
      const res = await Service.CreateSendBirdUser(
        userId,
        user?.fullName,
        user?.imageUrl
      );
      console.log(res);
    } catch (error) {
      console.log("Error while creating current user id", error);
    }
    // Owner User Id
    // Create Channel
  };

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

      <Button onClick={handleMessageOwner} className="w-full mt-6">
        Message Owner
      </Button>
    </div>
  );
};

export default OwnerDetails;
