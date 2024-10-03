import Header from "@/components/Header";
import carData from "@/shared/carDetails.json";
import featuresData from "@/shared/features.json";
import InputField from "./component/InputField";
import TextAreaField from "./component/TextAreaField";
import DropdownField from "./component/DropdownField";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { db } from "../../config";
import { CarListing } from "../../config/schema";

const AddList = () => {
  //  Form State
  const [formData, setFormData] = useState([]);
  const handleInputs = (name, value) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await db.insert(CarListing).values(formData);
      if (result) {
        console.log("Data Saved successfully!");
        console.log(result);
      }
    } catch (error) {
      console.log("Error saving data!");
      console.log(error.message);
    }
  };
  return (
    <div>
      <Header />
      {/* Listing Form  */}
      <div className="px-10 md:px-20 my-10">
        <h2 className="font-bold text-4xl">Add New Listing</h2>
        {/* Form */}
        <form onSubmit={handleSubmit} className="p-10 border rounded-md mt-10 ">
          {/* Car Details */}
          <div className=" ">
            {/* Heading */}
            <h2 className="font-medium text-xl mb-6">Car Details</h2>
            {/* Input fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {carData.carDetails.map((item, index) => {
                return (
                  <div key={index}>
                    <label className="text-sm md:pl-2">
                      {item.label}
                      {item.required && <span className="text-red-600">*</span>}
                    </label>
                    {item.fieldType == "text" || item.fieldType == "number" ? (
                      <InputField
                        item={item}
                        handleInputs={handleInputs}
                        placeholder={`Enter ${item.label} ${
                          item.fieldType == "number" ? "(Number)" : ""
                        }`}
                        className="rounded-md md:rounded-full"
                      />
                    ) : item.fieldType == "dropdown" ? (
                      <DropdownField
                        item={item}
                        handleInputs={handleInputs}
                        placeholder={`Enter ${item.label}`}
                      />
                    ) : item.fieldType == "textarea" ? (
                      <TextAreaField
                        item={item}
                        handleInputs={handleInputs}
                        placeholder={`Enter ${item.label}`}
                        className="rounded-md md:rounded-full"
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Separator */}
          <Separator className="my-6" />
          {/* Car Feature */}
          <div>
            <h2 className="font-medium text-xl mb-6">Features</h2>
            {/* Features Checkboxes : grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {featuresData.features.map((feature, index) => {
                return (
                  <div key={index} className="flex items-center gap-2">
                    {/*  onCheckedChange to get the value: true and fale and regiter to handleInputs */}
                    <Checkbox
                      onCheckedChange={(value) =>
                        handleInputs(feature.name, value)
                      }
                      className="md:rounded-full"
                    />
                    <h2>{feature.label}</h2>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Car Image */}

          {/* Submit Button */}
          <div className="flex justify-end mt-10">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddList;
