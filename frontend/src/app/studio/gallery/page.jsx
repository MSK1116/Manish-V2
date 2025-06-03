import React from "react";
import Studio_gallery from "./Studio_gallery";
import Studio_gallery2 from "./Studio_gallery2";
import Studio_gallery3 from "./Studio_gallery3";
import imageList1 from "../../../../public/studio/img.json";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),

  title: "Gallery | Photography by Manish Singh Mahato",
  description: "Browse the photography gallery of Manish Singh Mahato — high-quality nature photos featuring everything from insects, landscapes, and earthy textures. Free HD wallpapers and visual storytelling rooted in environmental love.",
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
    "Photography Gallery",
    "HD Wallpapers",
    "Mountain Wallpapers",
    "Free Image Gallery",
    "Nepal Nature Photographer",
    "Manish Mahato",
    "Lightroom Edits",
    "Personal Photography",
    "Photography Archive",
    "Wallpaper Download",
    "Nepali Wallpapers",
  ],
  openGraph: {
    title: "Gallery | Photography by Manish Singh Mahato",
    description: "Explore the visual gallery of Manish Singh Mahato — stunning high-resolution images capturing Nepal’s nature, texture, and even a nature poetry",
    url: "https://www.manishmahato.info.np/studio/gallery",
    siteName: "Manish Singh Mahato Studio Gallery",
    images: [
      {
        url: "studio/gallery_homepage.png",
        width: 1200,
        height: 630,
        alt: "Gallery preview - Manish Singh Mahato Photography",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  category: "Photography Gallery",
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
    canonical: "https://www.manishmahato.info.np/studio/gallery",
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
