import { HTMLProps, useMemo } from "react";
import { MdOutlineWbSunny, MdTranslate } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { IoHourglassOutline, IoRocketSharp } from "react-icons/io5";

export type IconType = "sun" | "github" | "translate" | "hourglass" | "rocket";

export interface ISimpleButton extends HTMLProps<HTMLButtonElement> {
  type: IconType;
}

export function SimpleButton(props: ISimpleButton) {
  const { type, className, ...rest } = props;

  const isNotHourGlassOrRocket = useMemo(() => {
    return type !== "hourglass" && type !== "rocket";
  }, [type]);

  const ButtonIcon = useMemo(() => {
    switch (type) {
      case "sun":
        return MdOutlineWbSunny;
      case "github":
        return FiGithub;
      case "hourglass":
        return IoHourglassOutline;
      case "rocket":
        return IoRocketSharp;
      case "translate":
      default:
        return MdTranslate;
    }
  }, [type]);

  return (
    <button
      className={`dark:bg-zinc-800 bg-zinc-100 p-2 rounded-md ${
        isNotHourGlassOrRocket
          ? "dark:hover:bg-opacity-40 hover:bg-zinc-200 [&>*:nth-child(1)]:hover:text-zinc-600 transition"
          : "cursor-default"
      } ${className}`}
      {...rest}
    >
      <ButtonIcon className="w-4 h-4 dark:text-zinc-500 text-zinc-400" />
    </button>
  );
}
