import { useTranslation } from "react-i18next";
import { SessionData } from "./SessionData";
import { SimpleButton } from "./SimpleButton";
import { Tasks } from "./Tasks";

export interface IBigCard {
  type?: "session_data" | "tasks_list";
  isDarkTheme?: boolean;
}

export function BigCard(props: IBigCard) {
  const { type = "tasks_list", isDarkTheme = true } = props;

  const { t } = useTranslation();

  if (type === "session_data") {
    return (
      <div className="h-[594px] flex w-full flex-col rounded-xl border dark:border-zinc-800 border-zinc-200 p-6">
        <div className="flex justify-between items-center border-b dark:border-zinc-800 border-zinc-200 pb-6 mb-6">
          <div className="flex flex-col">
            <h1 className="dark:text-zinc-400 text-zinc-600 font-bold text-2xl">
              {t("session_data")}
            </h1>
            <h2 className="dark:text-zinc-500 text-zinc-600 text-base font-normal">
              {t("next_cycles")}
            </h2>
          </div>
          <SimpleButton type="hourglass" />
        </div>
        <SessionData isDarkTheme={isDarkTheme} />
      </div>
    );
  }

  return (
    <div className="h-[594px] w-full flex flex-col rounded-xl border dark:border-zinc-800 border-zinc-200 p-6">
      <div className="flex justify-between items-center border-b dark:border-zinc-800 border-zinc-200 pb-6 mb-6">
        <div className="flex flex-col">
          <h1 className="dark:text-zinc-400 text-zinc-600 font-bold text-2xl">
            {t("tasks_list")}
          </h1>
          <h2 className="dark:text-zinc-500 text-zinc-600 text-base font-normal">
            {t("your_goals")}
          </h2>
        </div>
        <SimpleButton type="rocket" />
      </div>
      <Tasks />
    </div>
  );
}
