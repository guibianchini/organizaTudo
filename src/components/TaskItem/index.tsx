import { FC } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonIcon,
  IonLabel,
  IonText,
} from "@ionic/react";
import TaskResponse from "../../types/TaskResponse";
import clsx from "clsx";
import TaskService from "../../services/tasks";
import { checkmarkCircle, time } from "ionicons/icons";

interface Props {
  task: TaskResponse;
}

const TaskItem: FC<Props> = ({ task }) => {
  if (!task) return null;

  const { id, title, status } = task;

  const statusText = TaskService.getTextFromStatus(status);
  const statusColor = TaskService.getColorFromStatus(status);
  const statusIcon = status === "completed" ? checkmarkCircle : time;

  return (
    <IonCard routerLink={`/task/${id}`} mode="md">
      <IonCardHeader>
        <IonCardTitle className="">
          <IonText
            className={clsx("d-flex align-items-center gap-1", {
              "text-decoration-line-through": status === "completed",
            })}
          >
            {title}
          </IonText>
        </IonCardTitle>
        <IonCardSubtitle>
          <IonChip color={statusColor}>
            <IonIcon icon={statusIcon} color={statusColor} />
            <IonLabel>{statusText}</IonLabel>
          </IonChip>
        </IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
  );
};

export default TaskItem;
