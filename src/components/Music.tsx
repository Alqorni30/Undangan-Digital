import React, { useRef, useEffect } from "react";
import weddingMusic from "../assets/music/music.mp3";
import { GiMusicalNotes } from "react-icons/gi";
import { MdMusicOff } from "react-icons/md";

interface MusicPlayerProps {
  isMusicPlaying: boolean;
  toggleMusic: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({
  isMusicPlaying,
  toggleMusic,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isMusicPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isMusicPlaying]);

  return (
    <div className="z-10 fixed bottom-4 right-4 overflow-y-hidden">
      <audio ref={audioRef} src={weddingMusic}></audio>
      <button
        onClick={toggleMusic}
        className="text-white bg-gray-800 p-5 rounded-full"
      >
        {isMusicPlaying ? (
          <GiMusicalNotes size={24} />
        ) : (
          <MdMusicOff size={24} />
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
