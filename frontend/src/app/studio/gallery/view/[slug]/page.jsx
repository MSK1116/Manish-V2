import { notFound } from "next/navigation";
import imageData from "../../../../../../public/studio/img.json";
import Studio_view from "./Studio_view";
import Studio_view2 from "./Studio_view2";

export async function generateStaticParams() {
  return imageData.map((img) => ({
    slug: img.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const image = imageData.find((img) => img.slug === slug);

  if (!image) return { title: "Not Found" };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
    title: `${image.title} | Photograph by Manish Singh Mahato`,
    description: image.metaDescription,
    keywords: `${image.keywords.join(",")}`,
    openGraph: {
      title: image.title,
      description: image.metaDescription,
      url: `https://www.manishmahato.info.np/studio/gallery/view/${image.slug}`,
      siteName: "Manish Singh Mahato Studio Gallery",
      images: [
        {
          url: `/studio/${image.link_low}`,
          width: 1200,
          height: 800,
          alt: image.metaDescription,
        },
        {
          url: `/studio/${image.link}`,
          width: 1200,
          height: 800,
          alt: image.metaDescription,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: `https://www.manishmahato.info.np/studio/gallery/view/${image.slug}`,
    },
    category: "Photography Gallery",
    applicationName: "Manish Singh Mahato Photography",
    authors: [{ name: "Manish Singh Mahato", url: "https://www.manishmahato.info.np" }],
    creator: "Manish Singh Mahato",
    publisher: "Manish Singh Mahato",

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
}

export default async function Page({ params }) {
  const { slug } = await params;

  const image = imageData.find((img) => img.slug === slug);
  console.log(slug);
  if (!image) return notFound();

  return (
    <>
      <Studio_view image={image} />
      <Studio_view2 image={image} />
    </>
  );
}
