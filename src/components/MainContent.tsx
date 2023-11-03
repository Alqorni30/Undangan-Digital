import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import man from "../assets/weddingphoto/dosan.jpg";
import girl from "../assets/weddingphoto/dalmi.jpg";

const MainContent: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-gray-200">
      <h2
        className="text-center py-8 text-4xl font-secondary"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        We are Getting Married
      </h2>
      <div className="px-5 leading-8">
        <p className="text-lg text-center font-semibold">
          "Dan di antara ayat-ayat-Nya ialah Dia menciptakan untukmu istri-istri
          dari jenismu sendiri, supaya kamu merasa nyaman kepadanya, dan
          dijadikan-Nya di antaramu mawadah dan rahmah. Sesungguhnya pada yang
          demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir"
        </p>
        <p className="text-center text-lg">QS. Ar-Rum Ayat 21</p>
      </div>
      <div className="flex lg:flex-row flex-col gap-4 justify-center items-center py-8">
        <div
          className="leading-8 p-4"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <img src={man} alt="" className="w-[350px] rounded-t-full" />
          <h3 className="font-secondary font-bold text-xl text-center mt-4">
            Nam do san
          </h3>
          <p className="text-base font-semibold">
            Putra Pertama dari Bpk. Lee William dan Ibu. Sintya Meriska
          </p>
          <p className="font-primary">
            <a href="#" target="_blank" className="flex justify-center">
              @nam_do
            </a>
          </p>
        </div>
        <div>
          <p className="text-8xl font-bold font-secondary">&</p>
        </div>
        <div
          className="leading-8 p-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src={girl} alt="" className="w-[350px] rounded-t-full" />
          <h3 className="font-secondary font-bold text-xl text-center mt-4">
            Soe dal mi
          </h3>
          <p className="text-base font-semibold">
            Putri Kedua dari Bpk. Baek san lee dan Ibu. Fatma Andini
          </p>
          <p className="font-primary">
            <a href="#" target="_blank" className="flex justify-center">
              @Soe_23
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
