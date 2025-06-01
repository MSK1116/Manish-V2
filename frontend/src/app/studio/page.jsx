import React from "react";
import Studio_banner from "./Studio_banner";

import { pixelateImageToBase64 } from "@/lib/pixelate";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),

  title: "Studio | Photography by Manish Singh Mahato",
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

const page = async () => {
  const pixelatedImg1 = await pixelateImageToBase64("./public/studio/IMG_5547.jpg");
  const pixelatedImg2 = await pixelateImageToBase64("./public/studio/IMG_0779.jpg");
  return (
    <>
      <Studio_banner pixelImg={{ pixelatedImg1, pixelatedImg2 }} />
    </>
  );
};

export default page;
