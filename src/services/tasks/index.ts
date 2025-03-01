import TaskParams from "../../types/TaskParams";
import TaskResponse from "../../types/TaskResponse";
import api from "../api";

const TaskService = {
  async get(params: Partial<TaskParams>): Promise<TaskResponse[]> {
    const resultado: TaskResponse[] = await api().get("/tasks", {
      params: {
        _sort: "creationDate",
        ...params,
      },
    });
    return resultado;
  },

  async getById(id: number): Promise<TaskResponse> {
    const resultado: TaskResponse = await api().get(`/tasks/${id}`);
    return resultado;
  },

  async create(task: Omit<TaskResponse, "id">): Promise<TaskResponse> {
    const resultado: TaskResponse = await api().post("/tasks", {
      ...task,
      id: 0,
      creationDate: new Date().toISOString(),
    });
    return resultado;
  },

  async update(id: number, task: TaskResponse): Promise<TaskResponse> {
    const resultado: TaskResponse = await api().put(`/tasks/${id}`, {
      ...task,
      updatedDate: new Date().toISOString(),
    });
    return resultado;
  },

  async delete(id: number): Promise<void> {
    await api().delete(`/tasks/${id}`);
  },

  getColorFromStatus(status: TaskResponse["status"]): string {
    if (status === "in progress") return "primary";
    if (status === "completed") return "success";
    return "light";
  },
};

export default TaskService;
