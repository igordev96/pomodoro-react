import { useMemo } from "react";
import { IoPlayOutline, IoPlaySkipForwardOutline } from "react-icons/io5";
import { GiClockwiseRotation } from "react-icons/gi";

export interface IActionButton {
  type: "NEXT" | "PLAY" | "RESET";
  isBig?: boolean;
  onClick?(): void;
}

export function ActionButton(props: IActionButton) {
  const { type, isBig = false, onClick = () => {} } = props;

  const classes = useMemo(() => {
    return isBig
      ? "dark:bg-zinc-600 text-6xl h-20 w-20 dark:hover:bg-lime-500 hover:bg-lime-500"
      : "dark:bg-zinc-700 text-4xl h-14 w-14 dark:hover:bg-lime-600 hover:bg-lime-600";
  }, [isBig]);

  const Icon = useMemo(() => {
    switch (type) {
      case "RESET":
        return GiClockwiseRotation;
      case "NEXT":
        return IoPlaySkipForwardOutline;
      case "PLAY":
      default:
        return IoPlayOutline;
    }
  }, [type]);

  return (
    <div
      className={`${classes} transition-colors hover:text-white text-zinc-400 cursor-pointer rounded flex items-center justify-center`}
      onClick={onClick}
    >
      <Icon />
    </div>
  );
}
