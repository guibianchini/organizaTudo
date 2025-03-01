import React, { useState } from "react";
import { IonContent, IonPage, IonButton, IonText } from "@ionic/react";
import LoadingComponent from "../../components/LoadingComponent";
import ErrorComponent from "../../components/ErrorComponent";
import Header from "../../components/HeaderComponent";
import TaskForm from "../../components/TaskForm";
import { useViewTask } from "../../contexts/ViewTaskContext";
import ConfirmationModal from "../../components/ConfirmationModal";

const ViewTask: React.FC = () => {
  const { loading, error, task, deleteTask, editTask } = useViewTask();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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
      <IonContent>
        <IonText>
          <h2>{task?.title}</h2>
          <p>
            <strong>Status:</strong> {task?.status}
          </p>
          <p>
            <strong>Descrição:</strong> {task?.description}
          </p>
          <p>
            <strong>Data de Entrega:</strong> {task?.dueDate}
          </p>
        </IonText>
        <IonButton
          expand="full"
          color="danger"
          onClick={() => setShowDeleteModal(true)}
        >
          Excluir
        </IonButton>
        <ConfirmationModal
          isOpen={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={() => deleteTask(task?.id)}
          message="Tem certeza que deseja excluir esta tarefa?"
        />
        <IonButton
          expand="full"
          color="primary"
          onClick={() => setIsFormOpen(true)}
        >
          Editar
        </IonButton>

        <TaskForm
          isOpen={isFormOpen}
          initialData={task}
          onClose={() => setIsFormOpen(false)}
          onSave={(task) => {
            editTask(task);
            setIsFormOpen(false);
          }}
        />
      </IonContent>
    </IonPage>
  );
};

export default ViewTask;
