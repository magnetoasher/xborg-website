import { useEffect, useState } from "react";

export type CountdownType = {
  date: Date;
};

export type CountdownTimeType = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const Countdown = ({ date }: CountdownType) => {
  const [time, setTime] = useState<CountdownTimeType>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the date we're counting down to
    const countDownDate = date.getTime();

    // Update the count down every 1 second
    const x = setInterval(function () {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(x);
        setTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setTime({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);
  }, []);

  // Make arrays and make sure it always have at least
  // 2 numbers in it with 0 in front
  let daysArray = time.days.toString().split("");
  if (daysArray.length == 1) daysArray.unshift("0");
  let hoursArray = time.hours.toString().split("");
  if (hoursArray.length == 1) hoursArray.unshift("0");
  let minutesArray = time.minutes.toString().split("");
  if (minutesArray.length == 1) minutesArray.unshift("0");
  let secondsArray = time.seconds.toString().split("");
  if (secondsArray.length == 1) secondsArray.unshift("0");

  return (
    <div className='countdown row'>
      <div className='countdown-section row middle'>
        <div className='countdown-numbers'>
          {daysArray.map((item: string, index: number) => (
            <span key={index}>{item}</span>
          ))}
        </div>
        <div className='countdown-title'>Days</div>
      </div>
      <div className='countdown-section row middle'>
        <div className='countdown-numbers'>
          {hoursArray.map((item: string, index: number) => (
            <span key={index}>{item}</span>
          ))}
        </div>
        <div className='countdown-title'>Hours</div>
      </div>
      <div className='countdown-section row middle'>
        <div className='countdown-numbers'>
          {minutesArray.map((item: string, index: number) => (
            <span key={index}>{item}</span>
          ))}
        </div>
        <div className='countdown-title'>Mins</div>
      </div>
      <div className='countdown-section row middle'>
        <div className='countdown-numbers'>
          {secondsArray.map((item: string, index: number) => (
            <span key={index}>{item}</span>
          ))}
        </div>
        <div className='countdown-title'>Secs</div>
      </div>
    </div>
  );
};
