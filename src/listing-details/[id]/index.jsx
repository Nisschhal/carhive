import FormatResult from "@/shared/Service";
import { db } from "../../../config";
import { CarImages, CarListing } from "../../../config/schema";
import { eq } from "drizzle-orm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailHeader from "../components/DetailHeader";
import ImageGallary from "../components/ImageGallary";
import CarDescription from "../components/CarDescription";
import CarFeatures from "../components/CarFeatures";
import CarPrice from "../components/CarPrice";
import CarSpecification from "../components/CarSpecification";
import OwnerDetails from "../components/OwnerDetails";
import FinancialCalculator from "../components/FinancialCalculator";

const ListingDetails = () => {
  // get the car id from route using params
  const { id } = useParams();
  // store car Detail
  const [carDetails, setCarDetails] = useState();

  useEffect(() => {
    getCarDetails();
  }, [id]);

  const getCarDetails = async () => {
    try {
      const result = await db
        .select()
        .from(CarListing)
        .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
        .where(eq(CarListing.id, id));

      const formatedResult = FormatResult(result);
      console.log("fetched datails", formatedResult);
      setCarDetails(formatedResult[0]);
    } catch (error) {
      console.log("Error while getting car details", error.message);
    }
  };
  return (
    <>
      {carDetails && (
        <div className="">
          {/* Header Component */}
          {carDetails && <DetailHeader carDetails={carDetails} />}
          {/* Grid: Left and Right */}
          <div className="grid grid-cols-1 md:grid-cols-3 px-10 md:px-20 gap-5">
            {/* LEFT Side */}
            <div className="md:col-span-2 ">
              {/* Image Gallary */}
              {carDetails && <ImageGallary carDetails={carDetails} />}
              {/* Description */}
              <CarDescription carDetails={carDetails} />
              {/* Feature List */}
              <CarFeatures features={carDetails?.features} />
              {/* Financial Calculator */}
              <FinancialCalculator carDetails={carDetails} />
            </div>
            {/* RIGHT Side */}
            <div className="">
              {/* Pricing */}
              <CarPrice carDetails={carDetails} />
              {/* Car Properties */}
              <CarSpecification carDetails={carDetails} />
              {/* Owner Detail */}
              <OwnerDetails carDetails={carDetails} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ListingDetails;
