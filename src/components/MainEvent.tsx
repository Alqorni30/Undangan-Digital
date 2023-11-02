const MainEvent = () => {
  return (
    <>
      <div className="py-5 bg-gray-200">
        <h2 className="font-secondary text-4xl text-center my-6">
          Informasi Acara
        </h2>
        <div className="flex flex-wrap justify-around items-center p-8 gap-6">
          <div className="leading-8 border border-gray-800 rounded-lg p-4">
            <h3 className="font-secondary font-bold text-2xl text-center mt-4">
              Akad Nikah
            </h3>
            <p className="text-base font-semibold py-4 text-center">
              08:00 - 10:00
            </p>
            <p className="text-xl font-bold text-center">
              Kediaman mempelai Pria
            </p>
            <p className="text-lg font-semibold textr-center mb-3">
              Jl.Gunung sejati no.120, Konoha
            </p>
            <div className="flex justify-center items-center ">
              <button className="font-semibold font-primary border border-gray-700 hover:bg-gray-700 hover:text-white py-2 px-4">
                View Map
              </button>
            </div>
          </div>
          <div className="leading-8 border border-gray-800 rounded-lg p-4">
            <h3 className="font-secondary font-bold text-2xl text-center mt-4">
              Resepsi
            </h3>
            <p className="text-base font-semibold py-4 text-center">
              09:00 - 15:00
            </p>
            <p className="text-xl font-bold text-center">
              Kediaman mempelai Wanita
            </p>
            <p className="text-lg font-semibold textr-center mb-3">
              Jl.Mawar gang em no.190, Konoha
            </p>
            <div className="flex justify-center items-center ">
              <button className="font-semibold font-primary border border-gray-700 hover:bg-gray-700 hover:text-white py-2 px-4">
                View Map
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainEvent;
