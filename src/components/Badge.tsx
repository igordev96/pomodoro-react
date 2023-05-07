import { TbBrain } from "react-icons/tb";
import { FiCoffee } from "react-icons/fi";

type BreakType = "focus" | "short_break" | "long_break";

export interface IBadge {
  type?: BreakType;
}

export function Badge(props: IBadge) {
  const { type = "focus" } = props;

  const handleClasses = () => {
    switch (type) {
      case "long_break":
        return "bg-cyan-500 text-cyan-500 border-cyan-500";
      case "short_break":
        return "bg-amber-500 text-amber-500 border-amber-500";
      case "focus":
      default:
        return "bg-lime-500 text-lime-500 border-lime-500";
    }
  };

  const handleContent = () => {
    switch (type) {
      case "long_break":
        return (
          <>
            <FiCoffee className="text-base" />
            <h3>Long break</h3>
          </>
        );
      case "short_break":
        return (
          <>
            <FiCoffee className="text-base" />
            <h3>Short break</h3>
          </>
        );
      case "focus":
      default:
        return (
          <>
            <TbBrain className="text-base" />
            <h3>Focus</h3>
          </>
        );
    }
  };

  return (
    <div
      className={`${handleClasses()} flex items-center gap-2 font-semibold text-sm bg-opacity-10 border rounded px-2 py-1`}
    >
      {handleContent()}
    </div>
  );
}
