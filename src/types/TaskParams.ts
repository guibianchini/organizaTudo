interface TaskParams {
  id: number;
  status: "to do" | "in progress" | "completed" | null;
  completed: boolean;
}

export default TaskParams;
