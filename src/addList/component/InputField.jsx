import { Input } from "@/components/ui/input";

const InputField = ({ item, handleInputs, ...props }) => {
  return (
    <div>
      <Input
        type={item.fieldType}
        name={item?.name}
        onChange={(e) => handleInputs(item?.name, e.target.value)}
        required={item.required}
        {...props}
      />
    </div>
  );
};

export default InputField;
