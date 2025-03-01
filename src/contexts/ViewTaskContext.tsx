import React, { createContext, useContext } from "react";
import TaskService from "../services/tasks";
import { useRequest } from "ahooks";
import { useHistory, useParams } from "react-router";
import TaskResponse from "../types/TaskResponse";

interface ViewTaskType {
  task?: TaskResponse;
  loading: boolean;
  error?: Error;
  fetchTask: () => void;
  deleteTask: (id: number) => void;
  editTask: (task: TaskResponse) => void;
}

const ViewTask = createContext<ViewTaskType | undefined>(undefined);

export const ViewTaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const {
    data: task,
    loading,
    error,
    run: fetchTask,
  } = useRequest(() => TaskService.getById(Number(id)), { ready: !!id });

  const deleteTask = async (id: number) => {
    await TaskService.delete(id);
    history.push("/tasks", { replace: true });
  };

  const editTask = async (task: TaskResponse) => {
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
