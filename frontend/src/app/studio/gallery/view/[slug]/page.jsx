import { notFound } from "next/navigation";
import Image from "next/image";
import imageData from "../../../../../../public/studio/img.json";
import Studio_view from "./Studio_view";
import Studio_view2 from "./Studio_view2";

export async function generateStaticParams() {
  return imageData.map((img) => ({
    slug: img.id,
  }));
}

export async function generateMetadata({ params }, parent) {
  const { slug } = await params;
  const image = imageData.find((img) => img.id === slug);

  if (!image) return { title: "Not Found" };

  const parentMeta = await parent;

  return {
    title: `${image.title} | Manish Singh Mahato`,
    description: image.description,
    openGraph: {
      title: image.title,
      description: image.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/studio/gallery/view/${image.slug}`,
      images: [
        {
          url: `/studio/${image.link}`,
          width: 1200,
          height: 800,
          alt: image.title,
        },
        ...(parentMeta?.openGraph?.images || []),
      ],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/studio/gallery/view/${image.slug}`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  const image = imageData.find((img) => img.id === slug);
  console.log(slug);
  if (!image) return notFound();

  return (
    <>
      <Studio_view image={image} />
      <Studio_view2 image={image} />
    </>
  );
}
