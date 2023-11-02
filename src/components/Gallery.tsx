import gallery1 from "../assets/weddingphoto/wedding2.jpg";
import gallery2 from "../assets/weddingphoto/wedding3.jpg";
import gallery3 from "../assets/weddingphoto/wedding5.jpg";

const Gallery = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-200 py-4 px-4">
          <img src={gallery1} alt="" className="w-[450px] rounded-xl" />
          <img src={gallery2} alt="" className="w-[450px] rounded-xl" />
          <img src={gallery3} alt="" className="w-[450px] rounded-xl" />
        </div>
       
      </div>
    </>
  );
};

export default Gallery;
