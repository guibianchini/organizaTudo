import React, { createContext, useContext, useState } from "react";
import TaskService from "../services/tasks";
import { useRequest } from "ahooks";
import TaskResponse from "../types/TaskResponse";

interface ListTasksContextType {
  createTask: (task: TaskResponse) => void;
  error?: Error;
  fetchTasks: () => void;
  loading: boolean;
  selectedStatus: "all" | "pending" | "completed";
  setSelectedStatus: (status: "all" | "pending" | "completed") => void;
  tasks?: TaskResponse[];
}

const ListTasksContext = createContext<ListTasksContextType | undefined>(
  undefined
);

export const ListTasksProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedStatus, setSelectedStatus] = useState<
    "all" | "pending" | "completed"
  >("pending");

  const {
    data: tasks,
    loading,
    error,
    run: fetchTasks,
  } = useRequest(
    () =>
      TaskService.get({
        status: selectedStatus === "all" ? null : selectedStatus,
      }),
    {
      refreshDeps: [selectedStatus],
    }
  );

  const createTask = async (task: TaskResponse) => {
    await TaskService.create(task);
    fetchTasks();
  };

  return (
    <ListTasksContext.Provider
      value={{
        createTask,
        error,
        fetchTasks,
        loading,
        selectedStatus,
        setSelectedStatus,
        tasks,
      }}
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
