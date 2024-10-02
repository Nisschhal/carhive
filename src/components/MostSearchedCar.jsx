import FakeData from "@/shared/fakerData";
import { CarItem } from "./CarItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MostSearchedCar = () => {
  console.log(FakeData.carList);

  return (
    <div className="mx-24">
      {/* Header */}
      <h2 className="text-3xl font-bold text-center mb-16">
        Most Searched Car
      </h2>

      {/* Car Items in Carousel */}
      <Carousel className="mx-auto ">
        <CarouselContent>
          {FakeData.carList.map((car, index) => (
            <CarouselItem className=" md:basis-1/2 lg:basis-1/4  " key={index}>
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
