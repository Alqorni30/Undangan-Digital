import React, { useState } from "react";

interface Comment {
  id: number;
  name: string;
  comment: string;
}

const Komentar: React.FC = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newComment: Comment = {
      id: Date.now(),
      name,
      comment,
    };
    setComments([...comments, newComment]);
    setName("");
    setComment("");
  };
  return (
    <>
      <div className="font-primary bg-gray-200 py-4">
        <h3 className="text-5xl text-center font-secondary my-4">Komentar</h3>
        <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
          <h1 className="text-xl font-semibold text-gray-900">
            Kotak Komentar
          </h1>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label htmlFor="name" className="text-gray-600 font-medium block">
                Nama:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="comment"
                className="text-gray-600 font-medium block"
              >
                Komentar:
              </label>
              <textarea
                id="comment"
                value={comment}
                placeholder="Tulis Sesuatu...."
                onChange={(e) => setComment(e.target.value)}
                className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Kirim Komentar
            </button>
          </form>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Komentar Pengunjung:
            </h2>
            {comments.map((c) => (
              <div key={c.id} className="mt-2">
                <p className="font-medium">{c.name}:</p>
                <p>{c.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Komentar;
