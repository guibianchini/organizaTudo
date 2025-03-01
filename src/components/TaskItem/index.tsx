import { FC, useState } from "react";
import {
  IonBadge,
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonModal,
} from "@ionic/react";
import Task from "../../services/tasks/types/Task";
import TaskService from "../../services/tasks";
import { trash } from "ionicons/icons";

interface Props {
  task: Task;
  onDelete?: (id: number) => void;
}

const TaskItem: FC<Props> = ({
  task: { title, status, dueDate, id },
  onDelete,
}) => {
  const statusColor = TaskService.getColorFromStatus(status);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = () => {
    onDelete?.(id);
    setShowDeleteModal(false);
  };

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
      <IonIcon
        icon={trash}
        onClick={() => setShowDeleteModal(true)}
        style={{ cursor: "pointer", marginLeft: "10px", color: "red" }}
      />
      <div
        className={`bg-${statusColor}`}
        style={{ width: "10px", height: "100%" }}
      ></div>

      <IonModal
        isOpen={showDeleteModal}
        onDidDismiss={() => setShowDeleteModal(false)}
      >
        <IonLabel>
          <h3>Tem certeza que deseja excluir esta tarefa?</h3>
          <IonButton color="danger" onClick={handleDelete}>
            Excluir
          </IonButton>
          <IonButton
            color="secondary"
            onClick={() => setShowDeleteModal(false)}
          >
            Cancelar
          </IonButton>
        </IonLabel>
      </IonModal>
    </IonItem>
  );
};

export default TaskItem;
