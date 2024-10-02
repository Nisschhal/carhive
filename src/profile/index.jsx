import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <Header />
      {/* Listing and Add Button */}
      <div className="px-10 md:px-20 my-10">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold">My Listing</h2>
          <Button variant="outline" className="rouned-sm">
            <Link to={"/add-list"}> + Add Listing</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
