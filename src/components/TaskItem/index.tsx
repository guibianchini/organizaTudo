import { FC } from "react";
import { IonBadge, IonItem, IonLabel } from "@ionic/react";
import TaskService from "../../services/tasks";
import TaskResponse from "../../types/TaskResponse";

interface Props {
  task: TaskResponse;
}

const TaskItem: FC<Props> = ({ task }) => {
  if (!task) return null;

  const { id, title, status, dueDate } = task;

  const statusColor = TaskService.getColorFromStatus(status);

  return (
    <IonItem routerLink={`/task/${id}`}>
      <IonLabel>
        <h2>{title}</h2>
        <IonBadge color={statusColor}>{status}</IonBadge>

        {dueDate && (
          <p className="text-muted" style={{ marginTop: "5px" }}>
            Data de Entrega: {dueDate}
          </p>
        )}
      </IonLabel>
    </IonItem>
  );
};

export default TaskItem;
