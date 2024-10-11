import { Input } from "@/components/ui/input";

const InputField = ({ item, handleInputs, carInfo, ...props }) => {
  return (
    <div>
      <Input
        type={item.fieldType}
        name={item?.name}
        defaultValue={carInfo?.[item.name]}
        onChange={(e) => handleInputs(item?.name, e.target.value)}
        required={item.required}
        {...props}
      />
    </div>
  );
};

export default InputField;
