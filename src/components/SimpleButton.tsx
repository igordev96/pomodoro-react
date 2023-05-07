import { HTMLProps } from "react";
import { MdOutlineWbSunny, MdTranslate } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { IoHourglassOutline, IoRocketSharp } from "react-icons/io5";

export type IconType = "sun" | "github" | "translate" | "hourglass" | "rocket";

export interface ISimpleButton extends HTMLProps<HTMLButtonElement> {
  type: IconType;
}

export function SimpleButton(props: ISimpleButton) {
  const { type, className, ...rest } = props;

  const isNotHourGlassOrRocket = () => {
    return type !== "hourglass" && type !== "rocket";
  };

  const handleButtonIcon = () => {
    switch (type) {
      case "sun":
        return (
          <MdOutlineWbSunny className="w-4 h-4 dark:text-zinc-500 text-zinc-400" />
        );
      case "github":
        return (
          <FiGithub className="w-4 h-4 dark:text-zinc-500 text-zinc-400" />
        );
      case "hourglass":
        return (
          <IoHourglassOutline className="w-4 h-4 dark:text-zinc-500 text-zinc-400" />
        );
      case "rocket":
        return (
          <IoRocketSharp className="w-4 h-4 dark:text-zinc-500 text-zinc-400" />
        );
      case "translate":
      default:
        return (
          <MdTranslate className="w-4 h-4 dark:text-zinc-500 text-zinc-400" />
        );
    }
  };

  return (
    <button
      className={`dark:bg-zinc-800 bg-zinc-100 p-2 rounded-md ${
        isNotHourGlassOrRocket()
          ? "dark:hover:bg-opacity-40 hover:bg-zinc-200 [&>*:nth-child(1)]:hover:text-zinc-600 transition"
          : "cursor-default"
      } ${className}`}
      {...rest}
    >
      {handleButtonIcon()}
    </button>
  );
}
