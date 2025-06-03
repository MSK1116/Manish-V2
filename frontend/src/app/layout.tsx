import { Lora, Radio_Canada_Big } from "next/font/google";
import "./globals.css";
import Navbar_Box from "@/components/Navbar/Navbar_Box";
import AosInitializer from "@/components/AosInitializer";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";

const radioCanadaBig = Radio_Canada_Big({
  subsets: ["latin"],
  variable: "--font-radio-canada-big",
});
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Manish Singh Mahato",
  description: "Manish Singh Mahato is a passionate student, web developer, social activist, and photographer, bridging education, technology, and social action to drive positive societal change.",
  keywords: ["Manish Singh Mahato", "Manish", "student developer", "social activist", "web developer", "photographer", "education technology", "portfolio", "Nepal", "nepal youth leader", "Founder of Think Big Org", "Think Big"],

  openGraph: {
    title: "Manish Singh Mahato",
    description: "Explore the portfolio of Manish Singh Mahato — student, web developer, social activist, and photographer working at the intersection of education, technology, and social good.",
    url: "https://www.manishmahato.info.np/",
    siteName: "Manish Singh Mahato",
    images: [
      {
        url: "/JPG_manish_circle.png",
        width: 1200,
        height: 630,
        alt: "Manish Singh Mahato",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  alternates: {
    canonical: "https://www.manishmahato.info.np/",
  },

  category: "Portfolio",
  applicationName: "Manish Singh Mahato Portfolio",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://www.manishmahato.info.np/#manish",
              name: "Manish Singh Mahato",
              url: "https://www.manishmahato.info.np/",
              image: "https://www.manishmahato.info.np/MSK.jpg", // Ideally a profile image
              jobTitle: "Photographer",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kishanpur",
                addressLocality: "Barahathawa",
                addressRegion: "Madhesh",
                postalCode: "45800",
                addressCountry: "NP",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+9779812055778",
                contactType: "Personal",
                availableLanguage: ["English", "Nepali", "Maithili", "Hindi", "Bhojpuri"],
              },
              knowsLanguage: ["en", "ne", "mai", "hi", "bho"],
              knowsAbout: ["Photography", "Lightroom", "Coding", "HTML & CSS", "Web Development"],
              sameAs: ["https://www.facebook.com/manu0519/", "https://www.linkedin.com/in/manu0519", "https://www.instagram.com/manishsingh0519/"],
            }),
          }}
        />
      </head>
      <body className={`${radioCanadaBig.variable}   antialiased  ${lora.variable} `}>
        <Navbar_Box />
        {children}
        <Footer />
        <AosInitializer />
      </body>
    </html>
  );
}
