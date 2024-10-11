import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DropdownField = ({ item, handleInputs, carInfo }) => {
  return (
    <div>
      <Select
        onValueChange={(value) => handleInputs(item.name, value)}
        defaultValue={carInfo?.[item.name]}
      >
        <SelectTrigger className="shadow-none md:rounded-full  ">
          <SelectValue
            placeholder={
              carInfo?.[item?.name] ? carInfo?.[item?.name] : item.label
            }
          />
        </SelectTrigger>
        <SelectContent>
          {item?.options?.map((option, index) => {
            return (
              <SelectItem key={index} value={option}>
                {option}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default DropdownField;
