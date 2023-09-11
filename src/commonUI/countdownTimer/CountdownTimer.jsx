import React, { useState, useEffect } from "react";
import style from "./CountdownTimer.module.css";

const CountdownTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [sec, setSec] = useState(0);

  let interval;
  const CountDown = () => {
    const destination = new Date("sep 25, 2023").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = destination - now;
      if (diff <= 0) {
        clearInterval(interval());
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSec(0);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const sec = Math.floor((diff % (1000 * 60)) / 1000);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSec(sec);
      }
    }, 1000);
  };

  useEffect(() => {
    CountDown();
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={style.timer_container}>
      <div className={style.time}>
        <div className={style.time_text}>
          <h1>{days}</h1>
          <h5>Days</h5>
        </div>
        <span>:</span>
      </div>
      <div className={style.time}>
        <div className={style.time_text}>
          <h1>{hours}</h1>
          <h5>Hours</h5>
        </div>
        <span>:</span>
      </div>
      <div className={style.time}>
        <div className={style.time_text}>
          <h1>{minutes}</h1>
          <h5>Minutes</h5>
        </div>
        <span>:</span>
      </div>
      <div className={style.time}>
        <div className={style.time_text}>
          <h1>{sec}</h1>
          <h5>Seconds</h5>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;