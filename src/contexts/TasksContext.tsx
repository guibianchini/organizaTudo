import React, { createContext, useContext } from "react";
import Task from "../services/tasks/types/Task";
import TaskService from "../services/tasks";
import { useRequest } from "ahooks";

interface TaskContextType {
  tasks?: Task[];
  loading: boolean;
  error?: Error;
  fetchTasks: () => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    data: tasks,
    loading,
    error,
    run: fetchTasks,
  } = useRequest(() => TaskService.get());

  return (
    <TaskContext.Provider value={{ tasks, loading, error, fetchTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
