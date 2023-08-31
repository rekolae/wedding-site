import Image from "next/image";
import img1 from "@/public/img1.jpg";
import img2 from "@/public/img2.jpg";
import img3 from "@/public/img3.jpg";
import img4 from "@/public/img4.jpg";
import img5 from "@/public/img5.jpg";
import img6 from "@/public/img6.jpg";

export default function ImageGrid() {
  return (
    <div className="my-8 columns-2 gap-4 sm:columns-3">
      <div className="relative mb-4 h-40 transform transition-transform duration-300 lg:hover:scale-110">
        <Image
          alt=""
          src={img1}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-md object-cover object-center"
        />
      </div>
      <div className="relative mb-4 h-80 transform transition-transform duration-300 sm:mb-0 lg:hover:scale-110">
        <Image
          alt=""
          src={img2}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-md object-cover object-center"
        />
      </div>
      <div className="relative h-40 transform transition-transform duration-300 sm:mb-4 sm:h-80 lg:hover:scale-110">
        <Image
          alt="Loki tired"
          src={img3}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-md object-cover object-bottom"
        />
      </div>
      <div className="relative mb-4 h-40 transform transition-transform duration-300 sm:mb-0 lg:hover:scale-110">
        <Image
          alt="Loki see many far"
          src={img4}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-md object-cover object-center"
        />
      </div>
      <div className="relative mb-4 h-40 transform transition-transform duration-300 lg:hover:scale-110">
        <Image
          alt=""
          src={img6}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-md object-cover object-center"
        />
      </div>
      <div className="relative h-80 transform transition-transform duration-300 lg:hover:scale-110">
        <Image
          alt=""
          src={img5}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-md object-cover object-center"
        />
      </div>
    </div>
  );
}
