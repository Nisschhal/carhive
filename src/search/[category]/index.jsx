import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { CiSearch } from "react-icons/ci";
import Data from "@/shared/data";
import Header from "@/components/Header";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../../config";
import { CarImages, CarListing } from "../../../config/schema";
import { eq } from "drizzle-orm";
import FormatResult from "@/shared/Service";
import Search from "@/components/Search";
import { CarItem } from "@/components/CarItem";
import { Button } from "@/components/ui/button";
import { FaTrashAlt } from "react-icons/fa";

const SearchByCategory = () => {
  // storage for carByCategory
  const [categoryCars, setCategoryCars] = useState([]);
  // get the dynamic params
  const { category } = useParams();
  useEffect(() => {
    getCarsByCategory();
  }, [category]);

  // get the car list with category
  const getCarsByCategory = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.category, category));
    const formatedResult = FormatResult(result);
    setCategoryCars(formatedResult);
    console.log(category, formatedResult);
  };
  return (
    <div>
      <Header />
      <div className="bg-black p-16 flex justify-center ">
        <Search />
      </div>
      {/* CARs By Category */}
      {/* Heading (CategoryName) */}
      <h2 className="mt-10 text-4xl text-center font-bold">
        {(category && category) || "Category"}
        <span className="text-[.8em]">s</span>
      </h2>
      <div className="px-10 md:px-20">
        {/* // CAR LISTING IF ANY */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {categoryCars?.length > 0
            ? categoryCars.map((item, index) => (
                <div key={index} className="flex">
                  <CarItem car={item} />
                </div>
              ))
            : [1, 2, 3, 4, 5, 6].map((_, index) => (
                <div
                  key={index}
                  className="h-[300px] rounded-xl bg-slate-200 animate-pulse"
                ></div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default SearchByCategory;
