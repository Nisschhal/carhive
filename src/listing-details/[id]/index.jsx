import FormatResult from "@/shared/Service";
import { db } from "../../../config";
import { CarImages, CarListing } from "../../../config/schema";
import { eq } from "drizzle-orm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailHeader from "../components/DetailHeader";

const ListingDetails = () => {
  // get the car id from route using params
  const { id } = useParams();
  // store car Detail
  const [carDetails, setCarDetails] = useState({});

  useEffect(() => {
    getCarDetails();
  }, [id]);

  const getCarDetails = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.id, id));

    const formatedResult = FormatResult(result);
    setCarDetails(formatedResult[0]);
  };
  return (
    <div>
      <DetailHeader carDetails={carDetails} />
      Car Details
    </div>
  );
};

export default ListingDetails;
