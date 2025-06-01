import Image from "next/image";
import images from "../../../public/studio/img.json";
export default function VerticalMarquee() {
  return (
    <div className="flex flex-col size-full overflow-hidden gap-4 ">
      <div className="  w-screen h-1/3 overflow-hidden">
        <div className="animate-marquee-right-slow size-full flex flex-row gap-4">
          {[...images.slice(0, 5), ...images.slice(0, 5)].map((images, i) => (
            <div className=" relative min-w-[15%] bg-red-700 " key={i}>
              <Image className=" object-cover bg-pink-900" fill={true} src={`/studio/${images.link_low}`} alt={images.description}></Image>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-screen h-1/3  overflow-hidden">
        <div className="animate-marquee-left-medium flex size-full flex-row gap-4">
          {[...images.slice(5, 10), ...images.slice(5, 10)].map((images, i) => (
            <div className=" relative min-w-[16%]" key={i}>
              <Image className=" object-cover" fill={true} src={`/studio/${images.link_low}`} alt={images.description}></Image>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-screen h-1/3   overflow-hidden">
        <div className="animate-marquee-right-fast flex size-full  flex-row gap-4">
          {[...images.slice(10, images.length - 1), ...images.slice(10, images.length - 1)].map((images, i) => (
            <div className=" relative min-w-[14%] bg-pink-700" key={i}>
              <Image className=" object-cover bg-green-500" fill={true} src={`/studio/${images.link_low}`} alt={images.description}></Image>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
