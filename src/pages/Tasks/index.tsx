import React from "react";
import { IonContent, IonPage, IonList, IonButton } from "@ionic/react";
import LoadingComponent from "../../components/LoadingComponent";
import ErrorComponent from "../../components/ErrorComponent";
import Header from "../../components/Header";
import Task from "../../services/tasks/types/Task";
import TaskItem from "../../components/TaskItem";
import { useTaskContext } from "../../contexts/TasksContext";

const Tasks: React.FC = () => {
  const { loading, error, tasks } = useTaskContext();

  if (loading) {
    return (
      <IonPage>
        <Header title="Tarefas" />
        <IonContent>
          <LoadingComponent />
        </IonContent>
      </IonPage>
    );
  }

  if (error) {
    return (
      <IonPage>
        <Header title="Tarefas" />
        <IonContent>
          <ErrorComponent />
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <Header title="Tarefas" />
      <IonContent>
        <IonList>
          {tasks?.map((task: Task) => (
            <TaskItem key={task?.id} {...task} />
          ))}
        </IonList>
        <IonButton expand="full">Nova Tarefa</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tasks;
