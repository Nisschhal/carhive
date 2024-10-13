import { Button } from "@/components/ui/button";
import { MdOutlineLocalOffer } from "react-icons/md";

const CarPrice = ({ carDetails }) => {
  return (
    <div className="p-10 rounded-xl border shadow-md mt-2">
      <h2>Our Price</h2>
      <h2 className="font-bold text-4xl">$ {carDetails?.sellingPrice}</h2>
      <Button className="w-full mt-3 flex gap-2 items-center" size="lg" >
        <MdOutlineLocalOffer className="rotate-90" />
        <p>Make an Offer</p>
      </Button>
    </div>
  );
};

export default CarPrice;
