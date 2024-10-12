import Data from "@/shared/data";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div className="mt-40 mb-36">
      {/* Category header */}
      <h2 className="font-bold text-xl text-center mb-6">Browse By Type</h2>

      {/* Category Grid: default 3 || sm: 4 || md: 6 || lg: 9 */}
      <div className="mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20">
        {Data.Category.map((category, index) => (
          <Link to={`search/${category.name}`} key={index}>
            <div className="border rounded-xl p-3 flex items-center flex-col hover:shadow-md cursor-pointer">
              <img
                src={category.icon}
                alt={category.name}
                width={40}
                height={40}
              />
              <h2 className="mt-2 text-xs md:text-base">{category.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
