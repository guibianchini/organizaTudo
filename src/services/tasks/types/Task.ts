interface Task {
  id: number;
  title: string;
  description: string;
  status: "to do" | "in progress" | "completed";
  completed: boolean;
  creationDate: string;
  dueDate?: string | null;
}

export default Task;
