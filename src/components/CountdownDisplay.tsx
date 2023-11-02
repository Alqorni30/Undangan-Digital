import React, { useEffect, useState } from 'react';

interface CountdownDisplayProps {
  targetTime: number;
}

const CountdownDisplay: React.FC<CountdownDisplayProps> = ({ targetTime }) => {
  const [timeLeft, setTimeLeft] = useState(targetTime - new Date().getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeRemaining = targetTime - currentTime;

      if (timeRemaining <= 0) {
        clearInterval(intervalId);
        setTimeLeft(0);
      } else {
        setTimeLeft(timeRemaining);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [targetTime]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="text-4xl flex gap-8 justify-center">
        <div className='flex flex-col'>
            <h3>{days.toString().padStart(2, '0')}</h3>
            <p className='text-lg font-semibold'>Hari</p>
        </div>
        <div className='flex flex-col'>
            <h3>{hours.toString().padStart(2, '0')}</h3>
            <p className='text-lg font-semibold'>Jam</p>
        </div>
        <div className='flex flex-col'>
            <h3>{minutes.toString().padStart(2, '0')}</h3>
            <p className='text-lg font-semibold'>Menit</p>
        </div>
        <div className='flex flex-col'>
            <h3>{seconds.toString().padStart(2, '0')}</h3>
            <p className='text-lg font-semibold'>Detik</p>
        </div>
    </div>
  );
};

export default CountdownDisplay;
