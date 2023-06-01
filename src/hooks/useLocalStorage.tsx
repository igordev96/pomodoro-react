import { useEffect, useState } from "react";
import { ITask } from "../interfaces/Task.interface";

export const TASKS_KEY = "@pomodoro/tasks";

export function useLocalStorage() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getTasks = async () => {
    try {
      setIsLoading(true);
      const stringifiedTasks = localStorage.getItem(TASKS_KEY) ?? "[]";
      const localTasks: ITask[] = await JSON.parse(stringifiedTasks);
      setTasks(localTasks);
      return localTasks;
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateTasks = async (newTasks: ITask[]) => {
    try {
      setIsLoading(true);
      setTasks(newTasks);
      const stringifiedNewTasks = await JSON.stringify(newTasks);
      await localStorage.setItem(TASKS_KEY, stringifiedNewTasks);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return {
    tasks,
    updateTasks,
    getTasks,
    isLoading,
  };
}
