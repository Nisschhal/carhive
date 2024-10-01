import React from "react";
import Data from "@/shared/data";
const Category = () => {
  return (
    <div className="mt-40 mb-36">
      <h2 className="font-bold text-xl text-center mb-6">Browse By Type</h2>

      <div className="mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20">
        {Data.Category.map((category, index) => (
          <div
            key={index}
            className="border rounded-xl p-3 flex items-center flex-col hover:shadow-md cursor-pointer"
          >
            <img
              src={category.icon}
              alt={category.name}
              width={40}
              height={40}
            />
            <h2 className="mt-2">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
