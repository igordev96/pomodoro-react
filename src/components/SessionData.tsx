import { useState } from "react";
import { Badge } from "./Badge";
import { StopWatch } from "./StopWatch";
import {
  IPomodoroCycle,
  colorsByCycle,
  pomodoroCycle,
} from "../utils/PomodoroCycle";
import { useTranslation } from "react-i18next";

export interface ISessionData {
  isDarkTheme: boolean;
}

export function SessionData(props: ISessionData) {
  const { isDarkTheme } = props;

  const [cycle, setCycle] = useState<IPomodoroCycle>(pomodoroCycle[0]);
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="dark:text-zinc-400 text-zinc-500 text-[18px] font-semibold">
              {t("current_cycle")}:
            </h2>
            <h3 className="dark:text-zinc-500 text-zinc-400 text-sm font-medium">
              {t("pomodoro_current_cycle")}
            </h3>
          </div>
          <Badge type={cycle.actualCycle} />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="dark:text-zinc-400 text-zinc-500 text-[18px] font-semibold">
              {t("next_cycle")}
            </h2>
            <h3 className="dark:text-zinc-500 text-zinc-400 text-sm font-medium">
              {t("which_pomodoro")}
            </h3>
          </div>
          <Badge type={cycle.nextCycle} />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <StopWatch
          finalTime={cycle.time * 60}
          size={224}
          strokeWidth={15}
          setCycle={setCycle}
          innerStrokeColor={colorsByCycle[cycle.actualCycle]}
          outerStrokeColor={isDarkTheme ? "#27272A" : "#f4f4f5"}
          textColor={isDarkTheme ? "#f4f4f5" : "#52525B"}
        />
      </div>
    </>
  );
}
