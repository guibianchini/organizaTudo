import React, { createContext, useContext } from "react";
import Task from "../types/Task";
import TaskService from "../services/tasks";
import { useRequest } from "ahooks";
import { useParams } from "react-router";

interface ViewTaskType {
  task?: Task;
  loading: boolean;
  error?: Error;
  fetchTask: () => void;
  deleteTask: (id: number) => void;
  editTask: (task: Task) => void;
}

const ViewTask = createContext<ViewTaskType | undefined>(undefined);

export const ViewTaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { id } = useParams<{ id: string }>();

  const {
    data: task,
    loading,
    error,
    run: fetchTask,
  } = useRequest(() => TaskService.getById(Number(id)));

  const deleteTask = async (id: number) => {
    await TaskService.delete(id);
    fetchTask();
  };

  const editTask = async (task: Task) => {
    await TaskService.update(task.id, task);
    fetchTask();
  };

  return (
    <ViewTask.Provider
      value={{ task, loading, error, fetchTask, deleteTask, editTask }}
    >
      {children}
    </ViewTask.Provider>
  );
};

export const useViewTask = (): ViewTaskType => {
  const context = useContext(ViewTask);
  if (!context) {
    throw new Error("useViewTask must be used within a ViewTaskProvider");
  }
  return context;
};
