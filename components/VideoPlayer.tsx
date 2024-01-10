"use client";

import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import LoadingCircle from "./LoadingCircle";
import matleena from "@/public/matleena.png";
import Image from "next/image";

export default function VideoPlayer() {
  const [hasWindow, setHasWindow] = useState(false);
  const [hasMatleena, setHasMatleena] = useState(false);
  const videoSrc = "/ricardo.mp4";

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
      const matleenaTimer = setTimeout(
        () => {
          setHasMatleena(true);
        },
        Math.random() * 5 * 1000
      );

      return () => clearTimeout(matleenaTimer);
    }
  }, []);

  return (
    <div className="mx-auto my-2 content-center shadow-xl">
      <div
        className={`overflow-hidden rounded-lg transition-[height] duration-500 ${
          !hasMatleena ? "h-0" : "h-10"
        }`}
      >
        {hasMatleena ? (
          <>
            <h1 className="h1-header text-3xl font-normal">
              Matleena inbound!
            </h1>
            <div>
              <Image
                src={matleena}
                alt="Kuunteles nyt!"
                height={50}
                width={50}
                className="animate-pingPong absolute"
              />
            </div>
          </>
        ) : null}
      </div>
      {hasWindow ? (
        <>
          <ReactPlayer
            width="100%"
            height="100%"
            url={videoSrc}
            controls={true}
            light={false}
            pip={true}
            playsinline={true}
            volume={0.5}
            muted={false}
            loop={true}
            playing={true}
            className={"mx-auto"}
          />
          <source src={videoSrc} type="video/mp4" />
        </>
      ) : (
        <LoadingCircle />
      )}
    </div>
  );
}
