import React, { useRef, useEffect, useState } from "react";
import bg from "../assets/weddingphoto/wedding1.jpg";
import MusicPlayer from "./Music";
import { GiClick } from "react-icons/gi";

const Header: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  useEffect(() => {
    // Memeriksa status dari Local Storage saat komponen dimount
    const isScrolled = localStorage.getItem("isScrolled");
    if (isScrolled === "true") {
      setScrollEnabled(true);
      setIsMusicPlaying(true);
    }
  }, []);

  const handleButtonClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
      setScrollEnabled(true);
      setIsMusicPlaying(true);
      localStorage.setItem("isScrolled", "true");
    }
  };

  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    if (scrollEnabled) {
      enableScroll();
    } else {
      disableScroll();
    }
  }, [scrollEnabled]);

  return (
    <>
      <div className="relative">
        <img
          src={bg}
          alt="weddingBG"
          className="w-full object-cover object-top h-screen brightness-50"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <p className="text-xl font-semibold tracking-wider">The Wedding of</p>

          <h1 className="lg:text-5xl text-3xl font-bold font-secondary my-4 tracking-wider">
            Nan-do & So-yeon
          </h1>
          <p className="text-xl font-semibold font-secondary tracking-wider">
            01 . 01 . 2024
          </p>
          <div className="flex justify-center ">
            <button
              className="flex gap-2 items-center border border-gray-200 bg-gray-800 text-white font-primary px-2 py-3 mt-20 rounded-lg hover:bg-gray-500"
              onClick={handleButtonClick}
            >
              Buka Undangan <GiClick />
            </button>
          </div>
        </div>
      </div>
      <div ref={scrollRef}></div>
      <MusicPlayer
        isMusicPlaying={isMusicPlaying}
        toggleMusic={() => setIsMusicPlaying(!isMusicPlaying)}
      />
    </>
  );
};

export default Header;
