import React, { createContext, useContext } from "react";
import Task from "../services/tasks/types/Task";
import TaskService from "../services/tasks";
import { useRequest } from "ahooks";

interface TaskContextType {
  tasks?: Task[];
  loading: boolean;
  error?: Error;
  fetchTasks: () => void;
  createTask: (task: Task) => void;
  deleteTask: (id: number) => void;
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

  const createTask = async (task: Task) => {
    await TaskService.create(task);
    fetchTasks();
  };

  const deleteTask = async (id: number) => {
    await TaskService.delete(id);
    fetchTasks();
  };

  return (
    <TaskContext.Provider
      value={{ tasks, loading, error, fetchTasks, createTask, deleteTask }}
    >
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
