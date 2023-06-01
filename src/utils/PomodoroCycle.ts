import { BreakType } from "../components/Badge";

export interface IPomodoroCycle {
  actualCycle: BreakType;
  nextCycle: BreakType;
  time: 25 | 5 | 30;
}

export const pomodoroCycle: IPomodoroCycle[] = [
  {
    actualCycle: "focus",
    nextCycle: "short_break",
    time: 25,
  },
  {
    actualCycle: "short_break",
    nextCycle: "focus",
    time: 5,
  },
  {
    actualCycle: "focus",
    nextCycle: "short_break",
    time: 25,
  },
  {
    actualCycle: "short_break",
    nextCycle: "focus",
    time: 5,
  },
  {
    actualCycle: "focus",
    nextCycle: "short_break",
    time: 25,
  },
  {
    actualCycle: "short_break",
    nextCycle: "focus",
    time: 5,
  },
  {
    actualCycle: "focus",
    nextCycle: "long_break",
    time: 25,
  },
  {
    actualCycle: "long_break",
    nextCycle: "focus",
    time: 30,
  },
];

export const colorsByCycle = {
  focus: "#84CC16",
  short_break: "#f59e0b",
  long_break: "#06b6d4",
};
