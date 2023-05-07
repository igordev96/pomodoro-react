import { SimpleButton } from "./SimpleButton";

export interface IBigCard {
  type?: "session_data" | "tasks_list";
}

export function BigCard(props: IBigCard) {
  const { type = "tasks_list" } = props;

  if (type === "session_data") {
    return (
      <div className="flex flex-1 rounded-xl border dark:border-zinc-800 border-zinc-200 p-6">
        <div className="flex justify-between items-center self-start flex-1 border-b dark:border-zinc-800 border-zinc-200 pb-6 mb-6">
          <div className="flex flex-col">
            <h1 className="dark:text-zinc-400 text-zinc-600 font-bold text-2xl">
              Session data
            </h1>
            <h2 className="dark:text-zinc-500 text-zinc-600 text-base font-normal">
              Keep track of next cycles
            </h2>
          </div>
          <SimpleButton type="hourglass" className="cursor-default" />
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
        <SimpleButton type="rocket" className="cursor-default" />
      </div>
    </div>
  );
}
