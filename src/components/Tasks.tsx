import { useState } from "react";
import { useTranslation } from "react-i18next";
import { v4 as randomUUID } from "uuid";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { CustomInput } from "./CustomInput";
import { CustomButton } from "./CustomButton";
import { Task } from "./Task";

export function Tasks() {
  const { t } = useTranslation();
  const { tasks, updateTasks } = useLocalStorage();
  const [newTask, setNewTask] = useState<string>("");

  const handleNewTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.currentTarget.value);
  };

  const handlePublish = async () => {
    if (newTask.trim() !== "") {
      await updateTasks([
        ...tasks,
        {
          id: randomUUID(),
          done: false,
          item: newTask.trim(),
        },
      ]);
      setNewTask("");
    }
  };

  const handleDelete = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    await updateTasks(
      tasks.filter((prevTask) => prevTask.id !== e.currentTarget?.dataset.id)
    );
  };

  const handleOnPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.code === "Enter" && handlePublish();
  };

  const handleOnCheck = async (id: string, done: boolean) => {
    const newTasks = tasks.map((prevTask) => {
      if (prevTask.id !== id) return prevTask;
      return {
        ...prevTask,
        done,
      };
    });
    await updateTasks(newTasks);
  };

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex flex-col flex-1 overflow-y-auto mb-4">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            task={task}
            onContextMenu={handleDelete as any}
            handleOnCheck={handleOnCheck}
          />
        ))}
      </div>
      <div className="flex gap-3">
        <CustomInput
          onKeyUp={handleOnPressEnter}
          onChange={handleNewTask}
          placeholder={t("enter_task")!}
          value={newTask}
        />
        <CustomButton onClick={handlePublish} title={t("publish")} />
      </div>
    </div>
  );
}
