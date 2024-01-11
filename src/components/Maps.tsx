import React from "react";

const Maps: React.FC = () => {
  return (
    <div className="max-w-full mx-auto p-4 bg-gray-300 shadow-md rounded-lg">
      <h3 className="text-4xl font-semibold font-secondary text-center text-gray-900 mb-4">
        Peta Lokasi
      </h3>
      <div className="flex justify-center items-center">
        <div className="bg-slate-500 p-5 rounded-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.964923931242!2d106.00299822938885!3d-1.9569904730638692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e22ef033d494d45%3A0xccc752e92e0b051c!2sSempan%2C%20Kec.%20Pemali%2C%20Kabupaten%20Bangka%2C%20Kepulauan%20Bangka%20Belitung!5e0!3m2!1sid!2sid!4v1698866020593!5m2!1sid!2sid"
            width="500"
            height="400"
            loading="lazy"
          ></iframe>
          <h3 className="text-3xl mt-3 font-semibold font-secondary text-center text-white mb-4">
            Kediaman Mempelai
          </h3>
          <p className="text-lg font-semibold text-center text-white">Jalan Pondok Hokage Blok M No 20, Konoha tengah</p>
        </div>
      </div>
    </div>
  );
};

export default Maps;
