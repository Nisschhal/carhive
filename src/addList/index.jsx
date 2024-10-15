import Header from "@/components/Header";
import carData from "@/shared/carDetails.json";
import featuresData from "@/shared/features.json";
import InputField from "./component/InputField";
import TextAreaField from "./component/TextAreaField";
import DropdownField from "./component/DropdownField";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { db } from "../../config";
import { CarImages, CarListing } from "../../config/schema";
import IconField from "./component/IconField";
import UploadImage from "./component/UploadImage";
import { BiLoaderAlt } from "react-icons/bi";
import { toast } from "sonner";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import moment from "moment";
import { eq } from "drizzle-orm";
import Service from "@/shared/Service";
import Footer from "@/components/Footer";

const AddList = () => {
  // get the params queries if edit operation is triggered
  const [searchParams] = useSearchParams();

  // store the car info if edit triggered
  const [carInfo, setCarInfo] = useState({});
  // store the car info features
  const [carInfoFeatures, SetCarInfoFeatures] = useState({});

  const mode = searchParams.get("mode");
  const recordId = searchParams.get("id");
  console.log("workng", mode, recordId);

  // if add-list page is in edit mode than fetch the data with given id
  useEffect(() => {
    if (mode == "edit") {
      getListingDetails();
    }
  }, [mode]);

  // get the current id data for edit

  async function getListingDetails() {
    const result = await db
      .select()
      .from(CarListing)
      .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.id, recordId));

    // format the fetched data
    const formateData = Service.FormatResult(result);

    // formatdata comes in list, thus index 0
    setCarInfo(formateData[0]);
    setFormData(formateData[0]);
    console.log(formData);

    // setCar info features
    SetCarInfoFeatures(formateData[0]?.features);
    setFeatureFormData(formateData[0]?.features);
  }

  // get the user info to store postedBy
  const { user } = useUser();

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

    if (mode == "edit") {
      try {
        // insert the values and return the id
        const result = await db
          .update(CarListing)
          .set({
            ...formData,
            features: featureFormData,
            createdBy: user?.primaryEmailAddress?.emailAddress,

            postedOn: moment().format("DD/MMM/yyyy"),
          })
          .where(eq(CarListing.id, recordId))
          .returning({ id: CarListing.id });

        if (result) {
          console.log("Data update successfully!");
          console.log(result);

          // trigger upload image with inserted form data id
          setTriggerImagesUploadWithId(result[0]?.id);
          // clear form data
          clearFormData();
          // exit loading state
          setLoader(false);
        }
      } catch (error) {
        console.log("Error while updating data", error.message);
        // exit loading state
        setLoader(false);
      }
    } else {
      try {
        // insert the values and return the id
        const result = await db
          .insert(CarListing)
          .values({
            ...formData,
            features: featureFormData,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            userName: user?.fullName,
            userImageUrl: user?.imageUrl,
            postedOn: moment().format("DD/MMM/yyyy"),
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
        }
      } catch (error) {
        console.log("Error saving data!");
        console.log(error.message);
        // exit loading state
        setLoader(false);
      }
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
                        carInfo={carInfo}
                      />
                    ) : item.fieldType == "dropdown" ? (
                      <DropdownField
                        item={item}
                        handleInputs={handleInputs}
                        placeholder={`Enter ${item.label}`}
                        carInfo={carInfo}
                      />
                    ) : item.fieldType == "textarea" ? (
                      <TextAreaField
                        item={item}
                        handleInputs={handleInputs}
                        placeholder={`Enter ${item.label}`}
                        className="rounded-md md:rounded-full"
                        carInfo={carInfo}
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
                      checked={carInfoFeatures?.[feature.name]}
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
            carInfo={carInfo}
            mode={mode}
            setLoader={(v) => {
              setLoader(v); // redirect the route to '/profile'
              navigate("/profile");
            }}
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
      <Footer />
    </div>
  );
};

export default AddList;
