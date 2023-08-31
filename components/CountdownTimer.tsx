"use client";

import useCountdown from "@/lib/useCountdown";

export default function CountDownTimer() {
  const [days, hours, minutes, seconds, flag] = useCountdown();

  // If day part has rolled over to -1 and flag is set to 1 -> time has elapsed
  const timeElapsed: Boolean = days <= -1 && flag === 1;

  return (
    <>
      {timeElapsed ? (
        <CountDownExpired />
      ) : (
        <CountDown d={days} h={hours} m={minutes} s={seconds} />
      )}
    </>
  );
}

function CountDownExpired() {
  return (
    <div className="dark:animate-backgroundGradient mx-auto mb-6 flex flex-row justify-center gap-4 rounded-lg border border-gray-200 p-[2px] shadow-lg dark:bg-gradient-to-r dark:from-teal-500 dark:via-purple-500 dark:to-orange-500 dark:shadow-cyan-700">
      <div className="dark:bg-very-dark-blue rounded-md">
        <div className="m-2 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-4xl font-extrabold text-transparent">
            TAKEOFF!!!
          </span>
          <p>🚀To Infinity and Beyond!🚀</p>
        </div>
      </div>
    </div>
  );
}

function CountDown({
  d,
  h,
  m,
  s
}: {
  d: number;
  h: number;
  m: number;
  s: number;
}) {
  return (
    <div className="dark:animate-backgroundGradient mx-auto mb-6 flex flex-row justify-center gap-4 rounded-lg border border-gray-200 p-1 shadow-xl dark:border-none dark:bg-gradient-to-r dark:from-teal-500 dark:via-purple-500 dark:to-orange-500 dark:shadow-cyan-700">
      <div className="dark:bg-very-dark-blue rounded-md">
        <div className="mx-auto flex flex-row justify-center gap-4 rounded-lg p-1">
          <DateTimeDisplay value={d} type={"Days"} />
          <p className="my-2">:</p>
          <DateTimeDisplay value={h} type={"Hours"} />
          <p className="my-2">:</p>
          <DateTimeDisplay value={m} type={"Minutes"} />
          <p className="my-2">:</p>
          <DateTimeDisplay value={s} type={"Seconds"} />
        </div>
      </div>
    </div>
  );
}

function DateTimeDisplay({ value, type }: { value: number; type: string }) {
  return (
    <div className="text-center">
      {value === -1 ? <p className="animate-bounce">...</p> : <p>{value}</p>}
      <p>{type}</p>
    </div>
  );
}
