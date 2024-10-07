import { Button } from "@/components/ui/button";
import { storage } from "../../../config/firebase.config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
const UploadImage = () => {
  //  Image storage
  const [selectedFiles, setSelectedFiles] = useState([]);
  // Handle Image Selection
  const onFileSelected = (e) => {
    const files = e.target.files;
    for (let i = 0; i < files?.length; i++) {
      setSelectedFiles((prev) => [...prev, files[i]]);
    }
    console.log("inside", selectedFiles);
  };

  // Handle Image Remove
  const removeSelectedImage = (image) => {
    setSelectedFiles(selectedFiles.filter((file) => file != image));
  };

  // Handle Image upload to firebase
  const uploadImagetoFirebase = async () => {
    // create a filename using data with extension
    // get the reference to store, and bucket(if there is any) and filname to reference file
    // create the metadata as well if there is any\
    // upload upto firebase storage with uploadBytes(storage/dbref, file, metdata)
    // get the uploaded url with created references for each file using getDownloadURL(ref)
    try {
      selectedFiles.forEach(async (file) => {
        const fileName = Date.now() + ".jpeg";
        const storageRef = ref(storage, "carhive/" + fileName);
        const metaData = {
          contentType: "image/jpeg",
        };

        const response = await uploadBytes(storageRef, file, metaData);
        console.log("Image Upload Successful!");
        console.log(response);
        const imageURL = await getDownloadURL(storageRef);
        console.log("imageurl", imageURL);
      });
    } catch (error) {
      console.log("Error while uploading", error.message);
    }
  };

  console.log("outside", selectedFiles);
  return (
    <div className="">
      <h2 className="text-xl font-medium mb-3">Upload Car Images</h2>

      {/* GRID CONTAINER FOR UPLOAD IMAGE */}
      <div className="grid grid-cols-2 md:grid-cols-4 md:grid-cols-6 gap-5 items-center">
        {/* Selected/Uploaded Images */}
        {selectedFiles.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={URL.createObjectURL(image)}
              alt={image.name}
              className="w-full h-[130px] md:h-[180px] lg:h-[220px] object-cover rounded-xl"
            />
            {/* Image remove Icon */}
            <div
              onClick={() => removeSelectedImage(image, index)}
              className="absolute right-2 top-2 rounded-full bg-red-100 hover:bg-opacity-0 cursor-pointer group p-2 transition-all duration-200"
            >
              <IoMdCloseCircle className="text-red-500 text-sm group-hover:text-red-500" />
            </div>
          </div>
        ))}

        {/* Label Activator */}
        <label htmlFor="upload-images" className="">
          <div className=" border rounded-xl border-dotted border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-md ">
            <h2 className="text-xl font-medium text-center text-primary">+</h2>
          </div>
        </label>
        {/* File Input but hidden and activated using label as htmlFor and id is connected! */}
        <input
          type="file"
          name="images"
          id="upload-images"
          multiple={true}
          className="hidden"
          onChange={onFileSelected}
        />
      </div>
      <Button onClick={uploadImagetoFirebase}>Upload Image</Button>
    </div>
  );
};

export default UploadImage;
