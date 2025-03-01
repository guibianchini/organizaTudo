interface TaskParams {
  id: number;
  status: "all" | "pending" | "completed" | null;
  completed: boolean;
  _sort: string;
  _order: string;
  status_ne: string | null;
}

export default TaskParams;
