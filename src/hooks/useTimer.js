import { useRef, useEffect } from "react";

const useTimer = () => {
  const timeTaken = useRef("0s");

  useEffect(() => {
    let id = setInterval(() => {
      timeTaken.current = `${parseFloat(timeTaken.current) + 0.5}s`;
    }, 500);

    return () => {
      clearInterval(id);
    };
  }, []);

  const resetTimer = () => {
    timeTaken.current = "0s";
  };

  return { timeTaken, resetTimer };
};

export { useTimer };
