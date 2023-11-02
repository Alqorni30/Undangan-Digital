import React from 'react';
import CountdownDisplay from './CountdownDisplay';

const CountdownTimer: React.FC = () => {
    const targetDate = new Date('2024-01-01T00:00:00').getTime();

  return (
    <>
      <CountdownDisplay targetTime={targetDate} />
    </>
  );
};

export default CountdownTimer;
