import TaskParams from "../../types/TaskParams";
import TaskResponse from "../../types/TaskResponse";
import api from "../api";

const TaskService = {
  async get(params: Partial<TaskParams>): Promise<TaskResponse[]> {
    const queryParams: Partial<TaskParams> = {
      _sort: "status",
      ...params,
    };

    if (params.status === "pending") {
      // Se o status for "pending", busca apenas tarefas que NÃO são "completed".
      queryParams.status_ne = "completed";
      delete queryParams.status;
    } else if (params.status) {
      // Caso um status diferente seja informado, ele é utilizado diretamente no filtro.
      queryParams.status = params.status;
      delete queryParams.status_ne;
    }

    const resultado: TaskResponse[] = await api().get("/tasks", {
      params: queryParams,
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

  getColorFromStatus(status?: TaskResponse["status"]): string {
    if (status === "in progress") return "primary";
    if (status === "completed") return "success";
    return "light";
  },

  getTextFromStatus(status?: TaskResponse["status"]): string {
    if (status === "in progress") return "Em andamento";
    if (status === "completed") return "Concluído";
    if (status === "to do") return "Não iniciado";
    return "Pendente";
  },
};

export default TaskService;
