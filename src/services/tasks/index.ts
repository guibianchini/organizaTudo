import api from "../api";
import Task from "./types/Task";

const TaskService = {
  async get(): Promise<Task[]> {
    const resultado: Task[] = await api().get("/tasks");
    return resultado;
  },

  async getById(id: number): Promise<Task> {
    const resultado: Task = await api().get(`/tasks/${id}`);
    return resultado;
  },

  async create(task: Omit<Task, "id">): Promise<Task> {
    const resultado: Task = await api().post("/tasks", {
      ...task,
      creationDate: new Date().toISOString(),
    });
    return resultado;
  },

  async update(id: number, task: Task): Promise<Task> {
    const resultado: Task = await api().put(`/tasks/${id}`, {
      ...task,
      updatedDate: new Date().toISOString(),
    });
    return resultado;
  },

  async delete(id: number): Promise<void> {
    await api().delete(`/tasks/${id}`);
  },

  getColorFromStatus(status: Task["status"]): string {
    if (status === "in progress") return "primary";
    if (status === "completed") return "success";
    return "light";
  },
};

export default TaskService;
