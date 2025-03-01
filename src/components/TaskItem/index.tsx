import { FC } from "react";
import { IonItem, IonLabel } from "@ionic/react";
import clsx from "clsx";
import Task from "../../services/tasks/types/Task";

const TaskItem: FC<Task> = ({ title, status, dueDate }) => {
  const statusColor = clsx({
    "bg-secondary": status === "to do",
    "bg-primary": status === "in progress",
    "bg-success": status === "completed",
  });

  return (
    <IonItem>
      <IonLabel>
        <h2>{title}</h2>
        <span
          className={clsx("badge", {
            "badge-secondary": status === "to do",
            "badge-primary": status === "in progress",
            "badge-success": status === "completed",
          })}
        >
          {status}
        </span>

        {dueDate && (
          <p className="text-muted" style={{ marginTop: "5px" }}>
            Data de Entrega: {dueDate}
          </p>
        )}
      </IonLabel>
      <div
        className={`${statusColor}`}
        style={{ width: "10px", height: "100%" }}
      ></div>
    </IonItem>
  );
};

export default TaskItem;
