interface TaskResponse {
  id: number;
  title: string;
  description: string;
  status: "to do" | "in progress" | "completed";
  completed: boolean;
  creationDate: string;
  updatedDate?: string | null;
  dueDate?: string | null;
}

export default TaskResponse;
