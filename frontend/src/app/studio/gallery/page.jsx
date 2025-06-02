import React from "react";
import Studio_gallery from "./Studio_gallery";
import Studio_gallery2 from "./Studio_gallery2";
import Studio_gallery3 from "./Studio_gallery3";
import imageList1 from "../../../../public/studio/img.json";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),

  title: "Gallery | Photography by Manish Singh Mahato",
  description: "A personal gallery by Manish Singh Mahato, capturing nature's beauty — from tiny insects to vast mountains. Explore moments frozen in time, driven by a deep love for the environment.",
  keywords: [
    "Manish Singh Mahato",
    "Nature Photography",
    "Environmental Photography",
    "Nepal Photographer",
    "Insect Photography",
    "Mountain Photography",
    "Wildlife Photography",
    "Photography Portfolio",
    "Nature Gallery",
    "Manish Mahato Studio",
    "Personal Photography Archive",
  ],
  openGraph: {
    title: "Studio | Photography by Manish Singh Mahato",
    description: "Explore Manish Singh Mahato’s photography studio — a visual archive of his love for the environment, capturing moments in nature from insects to mountains.",
    url: "https://www.manishmahato.info.np/studio",
    siteName: "Manish Singh Mahato Studio",
    images: [
      {
        url: "/JPG_manish_circle.png",
        width: 1200,
        height: 630,
        alt: "Photography by Manish Singh Mahato",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  category: "Photography Portfolio",
  applicationName: "Manish Singh Mahato Photography",
  authors: [{ name: "Manish Singh Mahato", url: "https://www.manishmahato.info.np" }],
  creator: "Manish Singh Mahato",
  publisher: "Manish Singh Mahato",

  icons: {
    icon: "/JPG_manish_circle.png",
    shortcut: "/JPG_manish_circle.png",
    apple: "/JPG_manish_circle.png",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
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
