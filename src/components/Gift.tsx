import React, { useState } from "react";

const Gift: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const accountNumber = "1180831416"; // Gantilah dengan nomor rekening yang sesuai
    navigator.clipboard.writeText(accountNumber).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000); // Munculkan pemberitahuan selama 2 detik
    });
  };

  return (
    <>
      <div className="bg-gray-300 py-8">
        <div className="text-center">
            <h3 className="text-5xl font-secondary mb-4">Gift Love</h3>
            <p className="text-lg mb-8 p-4">Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.<br/> Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.</p>
        </div>
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg my-6">
          <h1 className="text-lg px-4 bg-gray-700 font-semibold text-white font-primary">
            Nomor Rekening
          </h1>
          <div className="p-4">
            <img
              src="https://storage.wedew.id/uploads/public/635/21a/a99/thumb_1923468_96_0_0_0_auto.png"
              alt=""
            />
            <div className="mt-4 flex justify-between items-center">
              <p className="text-lg text-red-600 font-semibold font-primary">
                1180831416
              </p>
              <button
                onClick={copyToClipboard}
                className="font-primary bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                {isCopied ? "Tersalin!" : "Copy"}
              </button>
            </div>
            <div className="mt-2">
              <p className="text-lg font-semibold font-primary">Vinn</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gift;
