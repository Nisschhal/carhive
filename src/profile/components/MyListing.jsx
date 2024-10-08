import { Button } from "@/components/ui/button";
import { db } from "../../../config/index";
import { Link } from "react-router-dom";
import { CarImages, CarListing } from "../../../config/schema";
import { desc, eq } from "drizzle-orm";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import FormatResult from "@/shared/Service";
import { CarItem } from "@/components/CarItem";
import { FaTrashAlt } from "react-icons/fa";

const MyListing = () => {
  // get the current user
  const { user } = useUser();
  // carList state
  const [carList, setCarList] = useState([]);
  // get the listed car by current user
  const GetUserCarListing = async () => {
    let carsListing = [];

    // get the carlisting with uploadedimage table in leftjoin that matches the current user in descending order
    const result = await db
      .select()
      .from(CarListing)
      .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(CarListing.id));

    // format the fetched data
    carsListing = FormatResult(result);
    // set the fromated data to car state
    setCarList(carsListing);
  };

  // spin up the useEffect if user is available
  useEffect(() => {
    user && GetUserCarListing();
  }, [user]);

  return (
    <div>
      {/* // HEADING AND ADD BUTTON */}
      <div className="flex justify-between items-center mt-10">
        <h2 className="text-4xl font-bold">My Listing</h2>
        {user && (
          <Button variant="outline" className="rouned-sm">
            <Link to={"/add-list"}> + Add Listing</Link>
          </Button>
        )}
      </div>
      {/* // CAR LISTING IF ANY */}
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5">
        {carList.map((item, index) => (
          <div key={index}>
            <CarItem car={item} />
            <div className="p-2 bg-gray-50 rounded-lg flex justify-between">
              <Button variant="outline" className="text-center mx-auto">
                Edit
              </Button>
              <Button variant="destructive">
                <FaTrashAlt />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyListing;
