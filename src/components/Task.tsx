import { useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CustomCheckbox } from "./CustomCheckbox";
import { ITask } from "../interfaces/Task.interface";

export type TaskProps = Checkbox.CheckboxProps &
  React.RefAttributes<HTMLButtonElement> & {
    task: ITask;
    handleOnCheck(id: string, done: boolean): void;
  };

export function Task(props: TaskProps) {
  const { task, onContextMenu, id, handleOnCheck, ...rest } = props;
  const [checked, setChecked] = useState<boolean | "indeterminate">(
    task.done as boolean
  );

  const handleCheck = (checked: Checkbox.CheckedState) => {
    handleOnCheck(task.id, checked === "indeterminate" ? false : checked);
    setChecked(checked);
  };

  return (
    <div
      data-id={id}
      className="flex items-center gap-2 mb-4"
      onContextMenu={
        onContextMenu as unknown as React.MouseEventHandler<HTMLDivElement>
      }
    >
      <CustomCheckbox
        bgColor={checked ? "bg-lime-500" : "dark:bg-zinc-800 bg-zinc-100"}
        checked={checked}
        defaultChecked={task.done}
        onCheckedChange={handleCheck}
        {...rest}
      />
      <h2 className="text-zinc-500">{task.item}</h2>
    </div>
  );
}
