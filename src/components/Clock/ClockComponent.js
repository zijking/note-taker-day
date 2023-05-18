import React, { useState, useEffect } from 'react';
import s from './ClockComponent.module.css'

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

//   const formatTime = (time) => {
//     return time.toLocaleString('en-US', {
//       hour: 'numeric',
//       minute: 'numeric',
//       second: 'numeric',
//       hour12: false,
//     });
//   };

  const getSecondsGradientColor = () => {
    const seconds = currentTime.getSeconds();
    const hue = (seconds / 60) * 360;

    const bgc = {
        background:`linear-gradient(90deg, hsl(${hue}, 100%, 50%), hsl(${hue + 120}, 100%, 50%))`,
    }

  

    return bgc;
  };

  

  return (
    <div  style={getSecondsGradientColor()} className={s.clockStyles}>
       <p>
        <span className={s.hoursStyle}>{currentTime.getHours()}:</span>
        <span className={s.minutesStyles}>{currentTime.getMinutes()>9?currentTime.getMinutes():`0${currentTime.getMinutes()}`}:</span>
        <span className={s.secondsStyles}>{currentTime.getSeconds()}</span>
      </p>
    </div>
  );
};

export default DigitalClock;
