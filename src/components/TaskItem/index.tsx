import { FC } from "react";
import { IonBadge, IonItem, IonLabel } from "@ionic/react";
import Task from "../../services/tasks/types/Task";
import TaskService from "../../services/tasks";

const TaskItem: FC<Task> = ({ title, status, dueDate }) => {
  const statusColor = TaskService.getColorFromStatus(status);

  return (
    <IonItem>
      <IonLabel>
        <h2>{title}</h2>
        <IonBadge color={statusColor}>{status}</IonBadge>

        {dueDate && (
          <p className="text-muted" style={{ marginTop: "5px" }}>
            Data de Entrega: {dueDate}
          </p>
        )}
      </IonLabel>
      <div
        className={`bg-${statusColor}`}
        style={{ width: "10px", height: "100%" }}
      ></div>
    </IonItem>
  );
};

export default TaskItem;
