import Header from "@/components/Header";
import Search from "@/components/Search";
import { db } from "../../config";
import { CarImages, CarListing } from "../../config/schema";
import { eq, gte, or } from "drizzle-orm";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FormatResult from "@/shared/Service";
import { CarItem } from "@/components/CarItem";

const SearchCar = () => {
  // url params to get condition, category, price
  const [searchParams] = useSearchParams();

  // extract the data from searchParams
  const condition = searchParams.get("condition");
  const make = searchParams.get("make");
  const price = searchParams.get("price") || 0;
  // state for searchedCars
  const [searchedCar, setSearchedCars] = useState([]);

  console.log(make, condition, price);

  const getSearchedCars = async () => {
    setSearchedCars([]);
    console.log("cliked");
    const result = await db
      .select()
      .from(CarListing)
      .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(
        or(
          eq(CarListing.condition, condition),
          eq(CarListing.make, make),
          gte(CarListing.sellingPrice, price)
        )
      );
    console.log(result);
    if (result) {
      const res = FormatResult(result);
      console.log("result", res);
      setSearchedCars(res);
    }
  };

  useEffect(() => {
    getSearchedCars();
  }, [condition, make, price]);

  return (
    <div>
      <Header />
      <div className="flex justify-center bg-gradient-to-r from-blue-400 to-indigo-600 p-10 md:p-15 pb-20">
        <Search className="" />
      </div>
      {/* Searched Car */}
      <div className="p-10 md:p-20">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {searchedCar.map((item, index) => (
            <div key={index}>
              <CarItem car={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchCar;
