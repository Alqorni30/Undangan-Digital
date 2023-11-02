import bgMain from "../assets/weddingphoto/wedding4.jpg";
import CountdownTimer from "./CountdownTimer";

const MainInfo = () => {
  return (
    <>
      <div className="relative">
        <img
          src={bgMain}
          alt="weddingBG"
          className="w-full object-cover object-top h-screen brightness-50"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <p className="text-2xl font-semibold font-secondary tracking-wider">
            01 Januari 2024
          </p>
          <h1 className="lg:text-5xl text-3xl font-bold  my-6 tracking-wider">
            Save The Date!!
          </h1>
          <CountdownTimer/>
        </div>
      </div>
    </>
  );
};

export default MainInfo;
