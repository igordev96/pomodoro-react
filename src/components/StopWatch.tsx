import { useState, useEffect } from "react";
import { ActionButton } from "./ActionButton";

export interface IStopWatch {
  size: number;
  strokeWidth: number;
  percentage: number;
}

export function StopWatch(props: IStopWatch) {
  const { percentage, size, strokeWidth } = props;

  const [progress, setProgress] = useState(0);
  const [isBlurry, setIsBlurry] = useState(false);

  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (progress * circumference) / 100;

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
          stroke="#27272A"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          fill="none"
          stroke="#84CC16"
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
          fill="#F4F4F5"
          fontSize="64px"
          x="50%"
          y="50%"
          dy="20px"
          textAnchor="middle"
        >
          {`19:32`}
        </text>
      </svg>
      {isBlurry && (
        <div className="absolute flex items-center gap-4 -bottom-1">
          <ActionButton type="COG" />
          <ActionButton type="PLAY" isBig />
          <ActionButton type="RESET" />
        </div>
      )}
    </div>
  );
}
