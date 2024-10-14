import Header from "@/components/Header";
import MyListing from "./components/MyListing";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Inbox from "./components/Inbox";
import { useSearchParams } from "react-router-dom";
import Footer from "@/components/Footer";

const Profile = () => {
  const [searchParam] = useSearchParams();
  const inbox = searchParam.get("inbox");
  console.log(inbox);
  let active = "my-listing";

  if (inbox == "true") {
    active = "inbox";
  }

  return (
    <div>
      <Header />
      {/* Listing and Add Button */}
      <div className="px-10 md:px-20 my-10">
        {/* Tabs */}
        <Tabs defaultValue={active} className="border w-full">
          <TabsList className="w-full flex justify-start">
            <TabsTrigger value="my-listing" className="text-base">
              MyListing
            </TabsTrigger>
            <TabsTrigger value="inbox" className="text-base">
              Inbox
            </TabsTrigger>
            <TabsTrigger value="profile" className="text-base">
              Profile
            </TabsTrigger>
          </TabsList>
          <TabsContent value="my-listing">
            <MyListing />
          </TabsContent>
          <TabsContent value="inbox">
            <Inbox />
          </TabsContent>
          <TabsContent value="profile">Change your profile.</TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
