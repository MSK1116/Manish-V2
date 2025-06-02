import React from "react";
import Studio_gallery from "./Studio_gallery";
import Studio_gallery2 from "./Studio_gallery2";
import Studio_gallery3 from "./Studio_gallery3";
import imageList1 from "../../../../public/studio/img.json";

const page = () => {
  const filtered = imageList1.filter((data) => data.type === "both" || data.type === "card");
  const filtered2 = imageList1.filter((data) => data.type === "both" || data.type === "gallery").sort((a, b) => b.id - a.id);
  return (
    <>
      <Studio_gallery images={filtered} />
      <Studio_gallery2 images={filtered2} />
      <Studio_gallery3 images={filtered2.slice(5)} />
    </>
  );
};

export default page;
