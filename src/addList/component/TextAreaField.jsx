import { Textarea } from "@/components/ui/textarea";

const TextAreaField = ({ item, handleInputs, ...props }) => {
  return (
    <div>
      <Textarea
        onChange={(e) => handleInputs(item.name, e.target.value)}
        {...props}
      />
    </div>
  );
};

export default TextAreaField;
