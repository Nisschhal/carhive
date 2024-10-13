import { useUser } from "@clerk/clerk-react";
import { App as SendbirdApp, SendBirdProvider } from "@sendbird/uikit-react";
import "@sendbird/uikit-react/dist/index.css";
import { GroupChannelList } from "@sendbird/uikit-react/GroupChannelList";
import { GroupChannel } from "@sendbird/uikit-react/GroupChannel";

import { useEffect, useState } from "react";

const Inbox = () => {
  const { user } = useUser();

  const [userId, setUserId] = useState();

  useEffect(() => {
    if (user) {
      const userId = user?.primaryEmailAddress?.emailAddress.split("@")[0];
      setUserId(userId);
    }
  }, [user]);

  const [channelUrl, setChannelUrl] = useState();

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
          {/* GRID: Chat list, col 30% || chat area: 70% */}
          <div className="h-full grid grid-cols-1 md:grid-cols-3">
            {/* Chat list */}
            <div className="md:col-span-1">
              <GroupChannelList
                onChannelSelect={(channel) => setChannelUrl(channel?.url)}
                channelListQueryParams={{
                  includeEmpty: true,
                }}
              />
            </div>
            <div className="md:col-span-2">
              <GroupChannel channelUrl={channelUrl} />
            </div>
          </div>
          {/* Chat box */}
        </SendBirdProvider>
      </div>
    </div>
  );
};

export default Inbox;
