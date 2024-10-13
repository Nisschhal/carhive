import { useUser } from "@clerk/clerk-react";
import { App as SendbirdApp, SendBirdProvider } from "@sendbird/uikit-react";
import "@sendbird/uikit-react/dist/index.css";
import { useEffect } from "react";

const Inbox = () => {
  const { user } = useUser();

  const [userId, setUserId] = useState();

  useEffect(() => {
    if (user) {
      const userId = user?.primaryEmailAddress?.emailAddress.split("@")[0];
      setUserId(userId);
    }
  }, [user]);

  return (
    <div>
      <div className="w-full h-screen">
        <SendBirdProvider
          appId={import.meta.env.VITE_SENDBIRD_APP_ID}
          userId={userId}
          nickname={user?.fullName}
          profileUrl={user?.imageUrl}
          allowProfileEdit={true}
        >

          
        </SendBirdProvider>
      </div>
    </div>
  );
};

export default Inbox;
