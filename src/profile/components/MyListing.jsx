import { Button } from "@/components/ui/button";
import { db } from "../../../config/index";
import { Link, Navigate } from "react-router-dom";
import { CarImages, CarListing } from "../../../config/schema";
import { desc, eq } from "drizzle-orm";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import FormatResult from "@/shared/Service";
import { CarItem } from "@/components/CarItem";
import { FaTrashAlt } from "react-icons/fa";
import Service from "@/shared/Service";
import DeleteAlert from "./DeleteAlert";

const MyListing = () => {
  // get the current user
  const { user } = useUser();
  // carList state
  const [carList, setCarList] = useState();

  // delete the car and its associated images
  const deleteCarListing = async (carId) => {
    // / First delete linked images from CarImages
    try {
      await db.delete(CarImages).where(eq(CarImages.carListingId, carId));
    } catch (error) {
      console.log("Error while delete linked image", error);
    }

    // Then delete the car listing from CarListing
    try {
      const result = await db
        .delete(CarListing)
        .where(eq(CarListing.id, carId))
        .returning({ id: CarListing.id });
      if (result) {
        console.log("Car Listing Delete successfully!");
      }
    } catch (error) {
      console.log("Error while delete car", error);
    }

    // delete from the state as well
    setCarList(carList.filter((item) => item.id != carId));
  };

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
    carsListing = Service.FormatResult(result);
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
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {carList
          ? carList.map((item, index) => (
              <div key={index}>
                <CarItem car={item} />
                <div className="p-2 bg-gray-50 rounded-lg flex justify-between ">
                  {/* // Link to add-list form with selected data */}
                  <Link
                    to={"/add-list?mode=edit&id=" + item?.id}
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full text-center mx-auto border-gray-200 bg-gray-100 flex-1 md:rounded-md"
                    >
                      Edit
                    </Button>
                  </Link>
                  <Button variant="destructive" className="md:rounded-md ml-2">
                    <DeleteAlert
                      handleDelete={() => deleteCarListing(item.id)}
                    />
                  </Button>
                </div>
              </div>
            ))
          : [1, 2, 3, 4, 5, 6].map((_, index) => (
              <div
                key={index}
                className="w-full h-[350px] bg-slate-200 rounded-xl animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
};

export default MyListing;
