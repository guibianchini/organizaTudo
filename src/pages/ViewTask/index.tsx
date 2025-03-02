/**
 * Página de visualização de uma tarefa específica.
 *
 * @component
 * @example
 * ```tsx
 * <ViewTask />
 * ```
 *
 * @description
 * Esta página exibe os detalhes de uma tarefa, incluindo título, status, descrição e data de entrega.
 * Permite editar ou excluir a tarefa utilizando um formulário modal e um alerta de confirmação, respectivamente.
 *
 * @returns {JSX.Element} Página de visualização da tarefa.
 */

import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonButton,
  IonText,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonChip,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import LoadingComponent from "../../components/LoadingComponent";
import ErrorComponent from "../../components/ErrorComponent";
import Header from "../../components/HeaderComponent";
import TaskForm from "../../components/TaskForm";
import { useViewTask } from "../../contexts/ViewTaskContext";
import TaskService from "../../services/tasks";
import { checkmarkCircle, time } from "ionicons/icons";
import ConfirmationAlert from "../../components/ConfirmationAlert";
import UtilService from "../../services/utils";

const ViewTask: React.FC = () => {
  const { loading, error, task, deleteTask, editTask } = useViewTask();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const statusText = TaskService.getTextFromStatus(task?.status);
  const statusColor = TaskService.getColorFromStatus(task?.status);
  const statusIcon = status === "completed" ? checkmarkCircle : time;

  if (loading) {
    return (
      <IonPage>
        <Header title="Visualizar Tarefa" />
        <IonContent>
          <LoadingComponent />
        </IonContent>
      </IonPage>
    );
  }

  if (error || !task) {
    return (
      <IonPage>
        <Header title="Visualizar Tarefa" />
        <IonContent>
          <ErrorComponent />
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <Header title="Visualizar Tarefa" goBack={true} />
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>{task?.title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonChip color={statusColor}>
              <IonIcon icon={statusIcon} color={statusColor} />
              <IonLabel>{statusText}</IonLabel>
            </IonChip>
            <IonText>
              <p>
                <strong>Descrição:</strong>{" "}
                {task?.description || "Sem descrição"}
              </p>
              <p>
                <strong>Data de Entrega:</strong>{" "}
                {task?.dueDate
                  ? UtilService.formatDate(task?.dueDate)
                  : "Nenhuma"}
              </p>
            </IonText>
            <div className="d-flex gap-2 justify-content-end pt-4">
              <IonButton
                className="ion-button-primary"
                onClick={() => setIsFormOpen(true)}
                slot="end"
              >
                Editar
              </IonButton>
              <IonButton
                color="light"
                onClick={() => setShowDeleteModal(true)}
                slot="end"
              >
                Excluir
              </IonButton>
            </div>
            <ConfirmationAlert
              isOpen={showDeleteModal}
              onClose={() => setShowDeleteModal(false)}
              onConfirm={() => deleteTask(task?.id)}
              title="Excluir Tarefa"
              message="Tem certeza que deseja excluir esta tarefa?"
            />

            <TaskForm
              isOpen={isFormOpen}
              initialData={task}
              onClose={() => setIsFormOpen(false)}
              onSave={(task) => {
                editTask(task);
                setIsFormOpen(false);
              }}
            />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ViewTask;
