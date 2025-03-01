import React, { createContext, useContext } from "react";
import Task from "../services/tasks/types/Task";
import TaskService from "../services/tasks";
import { useRequest } from "ahooks";

interface TasksContextType {
  tasks?: Task[];
  loading: boolean;
  error?: Error;
  fetchTasks: () => void;
  createTask: (task: Task) => void;
}

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const TasksProvider: React.FC<{ children: React.ReactNode }> = ({
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
    <TasksContext.Provider
      value={{ tasks, loading, error, fetchTasks, createTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = (): TasksContextType => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasksContext must be used within a TaskProvider");
  }
  return context;
};
