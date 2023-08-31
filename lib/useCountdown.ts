"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook to split time delta between now and targetDate
 * to days, hours, minutes and seconds
 *
 * @remarks
 * Custom react hooks must start with "use" according to conventions
 *
 * @returns Array containing remaining days, hours, minutes and seconds
 */
export default function useCountdown(): number[] {
  const [countDown, setCountDown] = useState(-1);

  useEffect(() => {
    const countDownDate = new Date(
      process.env.NEXT_PUBLIC_COUNTDOWN_DATE!
    ).getTime();

    const interval = setInterval(() => {
      // Update state with current timedelta after every second
      let timedelta = countDownDate - new Date().getTime();
      setCountDown(timedelta);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Initially display placeholder values
  if (countDown === -1) {
    return [-1, -1, -1, -1, 0];
  }

  return getTimeComponents(countDown);
}

/**
 * Split given time in ms to components of days, hours, minutes and seconds
 *
 * @param countDownTime - Time in ms from now to target date
 * @returns Array containing days, hours, minutes and seconds
 */
function getTimeComponents(countDownTime: number): number[] {
  // Millisecs * 1000 -> seconds * 60 -> minutes * 60 -> hours * 24 -> days (rounded down)
  const days = Math.floor(countDownTime / (1000 * 60 * 60 * 24));
  const days_ms = days * 1000 * 60 * 60 * 24;

  // Subtract day count from count down to get leftover hours rounded down
  const hours = Math.floor((countDownTime - days_ms) / (1000 * 60 * 60));
  const hours_ms = hours * 1000 * 60 * 60;

  // Subtract days and hours to get leftover minutes rounded down
  const minutes = Math.floor(
    (countDownTime - days_ms - hours_ms) / (1000 * 60)
  );
  const minutes_ms = minutes * 1000 * 60;

  // Subtract days, hours and minutes to get leftover seconds rounded down
  const seconds = Math.floor(
    (countDownTime - days_ms - hours_ms - minutes_ms) / 1000
  );

  return [days, hours, minutes, seconds, 1];
}
