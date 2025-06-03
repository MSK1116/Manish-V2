import { notFound } from "next/navigation";
import Image from "next/image";
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
    openGraph: {
      title: image.title,
      description: image.metaDescription,
      url: `https://www.manishmahato.info.np/studio/gallery/view/${image.slug}`,
      images: [
        {
          url: `/studio/${image.link_low}`,
          width: 1200,
          height: 800,
          alt: image.metaDescription,
        },
      ],
    },
    alternates: {
      canonical: `https://www.manishmahato.info.np/studio/gallery/view/${image.slug}`,
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
