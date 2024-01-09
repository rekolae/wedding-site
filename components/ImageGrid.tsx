import Image from "next/image";
import img1 from "@/public/img1.jpg";
import img2 from "@/public/img2.jpg";
import img3 from "@/public/img3.jpg";
import img4 from "@/public/img4.jpg";
import img5 from "@/public/img5.jpg";
import img6 from "@/public/img6.jpg";
import img7 from "@/public/img7.jpg";

export default function ImageGrid() {
  return (
    <section className="mx-2 my-8">
      <div className="relative">
        <div className="relative columns-2 gap-4 sm:columns-3">
          <div className="relative transform transition-transform duration-300 lg:hover:scale-105 dark:shadow-lg dark:shadow-cyan-900">
            <Image
              className="w-full rounded-lg object-cover"
              alt="hue"
              src={img1}
            />
          </div>
          <div className="relative mt-4 transform transition-transform duration-300 lg:hover:scale-105 dark:shadow-lg dark:shadow-cyan-900">
            <Image
              className="w-full rounded-lg object-cover"
              alt="hue"
              src={img2}
            />
          </div>
          <div className="relative mt-4 transform transition-transform duration-300 lg:hover:scale-105 dark:shadow-lg dark:shadow-cyan-900">
            <Image
              className="w-full rounded-lg object-cover"
              alt="hue"
              src={img3}
            />
          </div>
          <div className="relative mt-4 transform transition-transform duration-300 lg:hover:scale-105 dark:shadow-lg dark:shadow-cyan-900">
            <Image
              className="w-full rounded-lg object-cover"
              alt="hue"
              src={img4}
            />
          </div>
          <div className="relative mt-4 transform transition-transform duration-300 lg:hover:scale-105 dark:shadow-lg dark:shadow-cyan-900">
            <Image
              className="w-full rounded-lg object-cover"
              alt="hue"
              src={img7}
            />
          </div>
          <div className="relative mt-4 transform transition-transform duration-300 lg:hover:scale-105 dark:shadow-lg dark:shadow-cyan-900">
            <Image
              className="w-full rounded-lg object-cover"
              alt="hue"
              src={img5}
            />
          </div>
          <div className="relative mt-4 transform transition-transform duration-300 lg:hover:scale-105 dark:shadow-lg dark:shadow-cyan-900">
            <Image
              className="w-full rounded-lg object-cover"
              alt="hue"
              src={img6}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
