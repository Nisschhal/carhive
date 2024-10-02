import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DropdownField = ({ item, handleInputs }) => {
  return (
    <div>
      <Select onValueChange={(value) => handleInputs(item.name, value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={item.label} />
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
