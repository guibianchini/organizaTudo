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
    const resultado: Task = await api().post("/tasks", task);
    return resultado;
  },

  async update(id: number, task: Task): Promise<Task> {
    const resultado: Task = await api().put(`/tasks/${id}`, task);
    return resultado;
  },

  async delete(id: number): Promise<void> {
    await api().delete(`/tasks/${id}`);
  },
};

export default TaskService;
