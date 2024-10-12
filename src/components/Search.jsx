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
import { useState } from "react";
import { Link } from "react-router-dom";
const Search = () => {
  // state for query params: car || carmake || pricing
  const [searchQuery, setSearchQuery] = useState({});

  const onSelectSearch = (select, v) => {
    setSearchQuery((prev) => ({ ...prev, [select]: v }));
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center bg-white rounded-md md:rounded-full  py-6 mt-10 md:p-5 px-5 w-3/5">
      {/* 1 */}
      <Select onValueChange={(v) => onSelectSearch("condition", v)}>
        <SelectTrigger className="shadow-none md:focus:rounded-full outline-none md:border-none w-full">
          <SelectValue placeholder="Car" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="New">New</SelectItem>
          <SelectItem value="Used">Used</SelectItem>
          <SelectItem value="Certified Pre-Owned">
            Certified Pre-Owned
          </SelectItem>
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block" />
      {/* 2 */}
      <Select onValueChange={(v) => onSelectSearch("make", v)}>
        <SelectTrigger className="shadow-none md:focus:rounded-full outline-none md:border-none w-full">
          <SelectValue placeholder="Car Makes" />
        </SelectTrigger>
        <SelectContent>
          {Data.CarMakes.map((car, index) => (
            <SelectItem value={car.name} key={index}>
              {car.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block" />
      {/* 3 */}
      <Select onValueChange={(v) => onSelectSearch("price", v)}>
        <SelectTrigger className="shadow-none md:focus:rounded-full outline-none md:border-none w-full">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
          {Data.Pricing.map((price, index) => (
            <SelectItem value={price.amount} key={index}>
              {price.amount}$
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Search Icon */}
      <div>
        <Link
          to={`/search?condition=${searchQuery["condition"]}&make=${searchQuery["make"]}&price=${searchQuery["price"]}`}
        >
          <CiSearch className="bg-primary text-4xl font-bold  text-white rounded-full p-1.5 hover:scale-105 cursor-pointer transition-all" />
        </Link>
      </div>
    </div>
  );
};

export default Search;
