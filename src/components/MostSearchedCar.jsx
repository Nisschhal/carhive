import FakeData from "@/shared/fakerData";
import { CarItem } from "./CarItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { db } from "../../config/index";
import { CarImages, CarListing } from "../../config/schema";
import { desc, eq } from "drizzle-orm";
import FormatResult from "@/shared/Service";
import { useEffect, useState } from "react";

const MostSearchedCar = () => {
  const [popularCar, setPopularCar] = useState([]);
  console.log(FakeData.carList);

  // get the popular car from the db
  const getPopularCarList = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .orderBy(desc(CarListing.id))
      .limit(10);

    const carList = FormatResult(result);
    setPopularCar(carList);
  };

  // get the popular car as soon as homepage render
  useEffect(() => {
    getPopularCarList();
  }, []);

  return (
    <div className="mx-24">
      {/* Header */}
      <h2 className="text-3xl font-bold text-center mb-16">
        Most Searched Car
      </h2>

      {/* Car Items in Carousel */}
      <Carousel className="mx-auto ">
        <CarouselContent>
          {popularCar.map((car, index) => (
            <CarouselItem className=" md:basis-1/2 lg:basis-1/4" key={index}>
              <CarItem car={car} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MostSearchedCar;
