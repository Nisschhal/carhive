import { Button } from "@/components/ui/button";
import Service from "@/shared/Service";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const OwnerDetails = ({ carDetails }) => {
  const { user } = useUser();
  const handleMessageOwner = async () => {
    const navigate = useNavigate();
    // extract userid and ownerid
    const userId = user?.primaryEmailAddress.emailAddress.split("@")[0];
    const ownerId = carDetails?.createdBy?.split("@")[0];

    // Create Current User Id
    try {
      console.log("userid", userId, user.fullName);
      const res = await Service.CreateSendBirdUser(
        userId,
        user?.fullName || "User",
        user?.imageUrl
      );
      if (res) {
        console.log("Current User id created Successully!");
      }
    } catch (error) {
      console.log(
        "Error while creating current user id in Sendbird",
        error.response.data.message
      );
    }
    // Owner User Id
    try {
      const res = await Service.CreateSendBirdUser(
        ownerId,
        carDetails?.userName,
        carDetails?.userImageUrl
      );
      if (res) console.log("Owner id created Successully!");
    } catch (error) {
      console.log(
        "Error while creating owner userId in Sendbird",
        error.response.data.message
      );
    }
    // Create Channel

    try {
      const users = [userId, ownerId];
      const res = await Service.CreateSendBirdGroupChannel(
        users,
        carDetails?.listingTitle
      );
      if (res) {
        console.log("Group Channel Created Successfully");
        navigate("/profile?inbox='true'");
      }
    } catch (error) {
      console.log("Error while creating channel", error.response.data.message);
    }
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
