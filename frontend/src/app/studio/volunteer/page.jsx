import React from "react";
import Studio_volunteer1 from "./Studio_volunteer1";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),

  title: "Volunteer | Share Your Images with Manish Singh Mahato",
  description: "Contribute your photographs to support environmental and educational storytelling with Manish Singh Mahato. Your shared images can inspire change and awareness.",
  keywords: [
    "Share Images",
    "Volunteer Photography",
    "Manish Singh Mahato",
    "Photo Contribution",
    "Environmental Awareness",
    "Nepal Volunteering",
    "Think Big Org",
    "Community Media",
    "Photography for Change",
    "Social Impact Photography",
    "Submit Photos Nepal",
    "Volunteer with Manish",
    "Photography Outreach",
  ],
  openGraph: {
    title: "Volunteer | Share Your Images with Manish Singh Mahato",
    description: "Contribute your photographs to support environmental and educational storytelling with Manish Singh Mahato. Your shared images can inspire change and awareness.",
    url: "https://www.manishmahato.info.np/studio/volunteer",
    siteName: "Manish Singh Mahato Studio",
    images: [
      {
        url: "/studio/studio_homepage.png",
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
  alternates: {
    canonical: "https://www.manishmahato.info.np/studio/volunteer",
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
  return (
    <>
      <Studio_volunteer1 />
    </>
  );
};

export default page;
