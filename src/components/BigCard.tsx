import { Badge } from "./Badge";
import { SimpleButton } from "./SimpleButton";
import { StopWatch } from "./StopWatch";

export interface IBigCard {
  type?: "session_data" | "tasks_list";
}

export function BigCard(props: IBigCard) {
  const { type = "tasks_list" } = props;

  if (type === "session_data") {
    return (
      <div className="flex flex-1 flex-col rounded-xl border dark:border-zinc-800 border-zinc-200 p-6">
        <div className="flex justify-between items-center border-b dark:border-zinc-800 border-zinc-200 pb-6 mb-6">
          <div className="flex flex-col">
            <h1 className="dark:text-zinc-400 text-zinc-600 font-bold text-2xl">
              Session data
            </h1>
            <h2 className="dark:text-zinc-500 text-zinc-600 text-base font-normal">
              Keep track of next cycles
            </h2>
          </div>
          <SimpleButton type="hourglass" />
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="dark:text-zinc-400 text-zinc-500 text-[18px] font-semibold">
                Current cycle:
              </h2>
              <h3 className="dark:text-zinc-500 text-zinc-400 text-sm font-medium">
                Pomodoro current cycle
              </h3>
            </div>
            <Badge />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="dark:text-zinc-400 text-zinc-500 text-[18px] font-semibold">
                Next cycle:
              </h2>
              <h3 className="dark:text-zinc-500 text-zinc-400 text-sm font-medium">
                Which pomodoro cycle will come
              </h3>
            </div>
            <Badge type="short_break" />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <StopWatch percentage={76} size={224} strokeWidth={15} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 rounded-xl border dark:border-zinc-800 border-zinc-200 p-6">
      <div className="flex justify-between items-center self-start flex-1 border-b dark:border-zinc-800 border-zinc-200 pb-6 mb-6">
        <div className="flex flex-col">
          <h1 className="dark:text-zinc-400 text-zinc-600 font-bold text-2xl">
            Tasks list
          </h1>
          <h2 className="dark:text-zinc-500 text-zinc-600 text-base font-normal">
            Your goals for this session
          </h2>
        </div>
        <SimpleButton type="rocket" />
      </div>
    </div>
  );
}
