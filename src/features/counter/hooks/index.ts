import { useEffect, useRef, useState } from "react";

type UseTimerProps = {
  initialTime?: number;
  ms?: number;
  step?: number;
};
export function useTimer({
  initialTime = 0,
  ms = 1000,
  step = 1,
}: UseTimerProps = {}) {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(initialTime);

  const onChangeRunning = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isRunning) return () => {};

    timerRef.current = window.setInterval(() => {
      setTime((prevTime) => prevTime + step);
    }, ms);

    return () => {
      if (!timerRef.current) return;

      clearInterval(timerRef.current);
    };
  }, [isRunning, ms, step]);

  const padTime = time.toString().padStart(2, "0").split("");

  return {
    padTime,
    isRunning,
    onChangeRunning,
  };
}
