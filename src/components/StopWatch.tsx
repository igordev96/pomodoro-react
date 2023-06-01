import { useState, useEffect } from "react";
import { ActionButton } from "./ActionButton";
import { IPomodoroCycle, pomodoroCycle } from "../utils/PomodoroCycle";

export interface IStopWatch {
  size: number;
  strokeWidth: number;
  finalTime: number;
  innerStrokeColor: string;
  outerStrokeColor: string;
  textColor: string;
  setCycle: (param: IPomodoroCycle) => void;
}

export function StopWatch(props: IStopWatch) {
  const {
    finalTime,
    size,
    strokeWidth,
    innerStrokeColor,
    outerStrokeColor,
    textColor,
    setCycle,
  } = props;

  const [iteration, setIteration] = useState(1);
  const [time, setTime] = useState(finalTime);
  const [isActive, setIsActive] = useState(true);
  const [isBlurry, setIsBlurry] = useState(false);

  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (((finalTime - time) / finalTime) * 100 * circumference) / 100;

  const styleSeconds = (seconds: number) => {
    const minutes = Math.trunc(seconds / 60).toString();
    const fractionSeconds = (seconds % 60).toString();

    return `${minutes.padStart(2, "0")}:${fractionSeconds.padStart(2, "0")}`;
  };

  const handleStart = () => {
    if (time > 0) {
      setIsActive(true);
    }
  };

  const handleNext = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setCycle(pomodoroCycle[iteration % 8]);
      setIteration((prevIteration) => prevIteration + 1);
    }
  };

  const handleReset = () => {
    setTime(finalTime);
    handleStart();
  };

  useEffect(() => {
    let interval: NodeJS.Timer | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          }
          setIsActive(false);
          clearInterval(interval!);
          return 0;
        });
      }, 1000);
    } else {
      setCycle(pomodoroCycle[iteration % 8]);
      setIteration((prevIteration) => prevIteration + 1);
    }

    return () => clearInterval(interval!);
  }, [isActive]);

  useEffect(() => {
    setTime(finalTime);
  }, [finalTime]);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        setIsBlurry(true);
      }}
      onMouseLeave={() => {
        setIsBlurry(false);
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={viewBox}
        {...(isBlurry && { className: "blur-sm" })}
      >
        <circle
          fill="none"
          stroke={outerStrokeColor}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          fill="none"
          stroke={innerStrokeColor}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          strokeDasharray={`${dash} ${circumference - dash}`}
          strokeLinecap="round"
          style={{ transition: "all 0.5s" }}
        />
        <text
          fontFamily="Rajdhani"
          fill={textColor}
          fontSize="64px"
          x="50%"
          y="50%"
          dy="20px"
          textAnchor="middle"
        >
          {styleSeconds(time)}
        </text>
      </svg>
      {isBlurry && (
        <div className="absolute flex items-center gap-4 -bottom-1">
          <ActionButton type="NEXT" onClick={handleNext} />
          <ActionButton type="PLAY" isBig onClick={handleStart} />
          <ActionButton type="RESET" onClick={handleReset} />
        </div>
      )}
    </div>
  );
}
