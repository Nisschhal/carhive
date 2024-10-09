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
import IconField from "./component/IconField";
import UploadImage from "./component/UploadImage";
import { BiLoaderAlt } from "react-icons/bi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const AddList = () => {
  // intalize the navigation for redirect
  const navigate = useNavigate();

  // Loader state while submitting
  const [loader, setLoader] = useState(false);

  // CarListing Data id storage to trigger image upload if any
  const [triggerImagesUploadWithId, setTriggerImagesUploadWithId] =
    useState(null);

  //  Form State
  const [formData, setFormData] = useState([]);
  const [featureFormData, setFeatureFormData] = useState({});
  /**
   * Capture form input data
   * @param {*} name
   * @param {*} value
   */
  const handleInputs = (name, value) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  /**
   * Capture checked features data
   * @param {*} name
   * @param {*} value
   */
  const handleFeatures = (name, value) => {
    setFeatureFormData((prevFeaturesData) => {
      return {
        ...prevFeaturesData,
        [name]: value,
      };
    });
    console.log(featureFormData);
  };

  /**
   * Submit the data to neon database for postgreSQL data
   * @param {*} e
   */
  const handleSubmit = async (e) => {
    // enter loading state
    setLoader(true);
    e.preventDefault();
    toast("Please wait...");

    try {
      // insert the values and return the id
      const result = await db
        .insert(CarListing)
        .values({
          ...formData,
          features: featureFormData,
        })
        .returning({ id: CarListing.id });
      if (result) {
        console.log("Data Saved successfully!");
        console.log(result);

        // trigger upload image with inserted form data id
        setTriggerImagesUploadWithId(result[0]?.id);
        // clear form data
        clearFormData();
        // exit loading state
        setLoader(false);

        // redirect the route to '/profile'
        navigate("/profile");
      }
    } catch (error) {
      console.log("Error saving data!");
      console.log(error.message);
      // exit loading state
      setLoader(false);
    }
  };

  // Clear form Data: Form to empty array and feature data to empty object
  const clearFormData = () => {
    setFormData([]);
    setFeatureFormData({});
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
                    <label className="text-sm md:pl-2 flex items-center gap-2 mb-1">
                      <IconField icon={item?.icon} />
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
                        handleFeatures(feature.name, value)
                      }
                      className="md:rounded-full"
                    />
                    <h2>{feature.label}</h2>
                  </div>
                );
              })}
            </div>
          </div>
          <Separator className="my-6" />
          {/* Car Image Upload */}
          <UploadImage
            triggerImagesUploadWithId={triggerImagesUploadWithId}
            setLoader={(v) => setLoader(v)}
          />
          {/* Submit Button */}
          <div className="flex justify-end mt-10">
            <Button type="submit" disabled={loader}>
              {!loader ? (
                "Submit"
              ) : (
                <BiLoaderAlt className="animate-spin size-7" />
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddList;
