import React, { createContext, useContext } from "react";
import Task from "../types/Task";
import TaskService from "../services/tasks";
import { useRequest } from "ahooks";

interface ListTasksContextType {
  tasks?: Task[];
  loading: boolean;
  error?: Error;
  fetchTasks: () => void;
  createTask: (task: Task) => void;
}

const ListTasksContext = createContext<ListTasksContextType | undefined>(undefined);

export const ListTasksProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    data: tasks,
    loading,
    error,
    run: fetchTasks,
  } = useRequest(() => TaskService.get());

  const createTask = async (task: Task) => {
    await TaskService.create(task);
    fetchTasks();
  };

  return (
    <ListTasksContext.Provider
      value={{ tasks, loading, error, fetchTasks, createTask }}
    >
      {children}
    </ListTasksContext.Provider>
  );
};

export const useListTasksContext = (): ListTasksContextType => {
  const context = useContext(ListTasksContext);
  if (!context) {
    throw new Error("useListTasksContext must be used within a TaskProvider");
  }
  return context;
};
