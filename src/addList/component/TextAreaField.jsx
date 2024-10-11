import { Textarea } from "@/components/ui/textarea";

const TextAreaField = ({ item, handleInputs, carInfo, ...props }) => {
  return (
    <div>
      <Textarea
        onChange={(e) => handleInputs(item.name, e.target.value)}
        required={item.required}
        {...props}
        defaultValue={carInfo?.[item.name]}
      />
    </div>
  );
};

export default TextAreaField;
