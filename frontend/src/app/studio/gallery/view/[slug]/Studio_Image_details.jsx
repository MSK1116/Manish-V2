"use client";
import React, { useEffect, useState } from "react";
import ExifReader from "exifreader";

const Studio_Image_details = ({ imageData }) => {
  const [imageDetails, setImageDetails] = useState({
    resolution: "Loading...",
    fileType: "Loading...",
    focalLength: "Loading...",
    exposureTime: "Loading...",
    ApertureValue: "Loading...",
    ISOSpeedRatings: "Loading...",
    CreateDate: "Loading...",
  });

  useEffect(() => {
    if (imageData) {
      processImageDetails(imageData);
    }
  }, [imageData]);

  const processImageDetails = (imageData) => {
    const image = new Image();
    image.src = "/studio/" + imageData.link;
    image.onload = () => {
      const resolution = `${image.naturalWidth} x ${image.naturalHeight}`;
      const fileType = imageData.link.split(".").pop().toUpperCase();
      // Fetch the image as a Blob to read its EXIF data
      setImageDetails({
        resolution: "lLoading...",
        fileType: "Loading...",
        focalLength: "Loading...",
        exposureTime: "Loading...",
        ApertureValue: "Loading...",
        ISOSpeedRatings: "Loading...",
        CreateDate: "Day ☀️",
      });
      fetch(image.src)
        .then((response) => response.blob())
        .then((blob) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            // Read the EXIF data using exifreader
            const tags = ExifReader.load(reader.result);

            const focalLength = tags.FocalLength ? tags.FocalLength.description : "N/A";
            const exposureTime = tags.ExposureTime ? tags.ExposureTime.description : "N/A";
            const ApertureValue = tags.ApertureValue ? tags.ApertureValue.description : "N/A";
            const ISOSpeedRatings = tags.ISOSpeedRatings ? tags.ISOSpeedRatings.description : "N/A";
            const CreateDateOrg = tags.CreateDate ? tags.CreateDate.description : "N/A";

            const CreateDate = CreateDateOrg && !isNaN(new Date(CreateDateOrg)) ? new Date(CreateDateOrg).toISOString().replace("T", " ").substring(0, 19) : "Day☀️";

            const processedDetails = {
              resolution,
              fileType,
              focalLength: focalLength,
              exposureTime: exposureTime,
              ApertureValue,
              ISOSpeedRatings,
              CreateDate,
            };

            setImageDetails(processedDetails);
          };
          reader.readAsArrayBuffer(blob);
        })
        .catch((error) => {
          console.error("Error fetching image for EXIF data:", error);
          setImageDetails({
            resolution: 0,

            fileType: "N/A",
            focalLength: "N/A",
            exposureTime: "N/A",
            ApertureValue: "N/A",
            ISOSpeedRatings: "N/A",
            CreateDate: "Day ☀️",
          });
        });
    };

    image.onerror = (error) => {
      console.error("Error loading image:", error);
      setImageDetails({
        resolution: "N/A",

        fileType: "N/A",
        focalLength: "N/A",
        exposureTime: "N/A",
        ApertureValue: "N/A",
        ISOSpeedRatings: "N/A",
        CreateDate: "N/A",
      });
    };
  };

  return (
    <>
      <article>
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          <div className="grid  p-1 grid-cols-3 gap-4">
            <dt className="font-medium text-gray-900">Clicked on</dt>
            <dd className="text-gray-700 col-span-2">{imageDetails ? imageDetails.CreateDate : "Day ☀️"}</dd>
          </div>
          <div className="grid  p-1 grid-cols-3 gap-4">
            <dt className="font-medium text-gray-900">File Type</dt>
            <dd className="text-gray-700 col-span-2">{imageDetails ? imageDetails.fileType : "N/A"}</dd>
          </div>
          <div className="grid  p-1 grid-cols-3 gap-4">
            <dt className="font-medium text-gray-900">Dimensions</dt>
            <dd className="text-gray-700 col-span-2">{imageDetails ? imageDetails.resolution : "N/A"}</dd>
          </div>

          <div className="grid  p-1 grid-cols-3 gap-4">
            <dt className="font-medium text-gray-900">Aperture</dt>
            <dd className="text-gray-700 col-span-2">{imageDetails ? `f/${imageDetails.ApertureValue}` : "N/A"}</dd>
          </div>

          <div className="grid  p-1 grid-cols-3 gap-4">
            <dt className="font-medium text-gray-900">Exposure</dt>
            <dd className="text-gray-700 col-span-2">{imageDetails ? imageDetails.exposureTime + " sec" : "N/A"}</dd>
          </div>

          <div className="grid  p-1 grid-cols-3 gap-4">
            <dt className="font-medium text-gray-900">Focal Length</dt>
            <dd className="text-gray-700 col-span-2">{imageDetails ? imageDetails.focalLength : "N/A"}</dd>
          </div>
        </dl>
      </article>
    </>
  );
};

export default Studio_Image_details;
