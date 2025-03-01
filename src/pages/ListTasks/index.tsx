import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonList,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";
import LoadingComponent from "../../components/LoadingComponent";
import ErrorComponent from "../../components/ErrorComponent";
import Header from "../../components/HeaderComponent";
import { add } from "ionicons/icons";
import TaskItem from "../../components/TaskItem";
import { useListTasksContext } from "../../contexts/ListTasksContext";
import TaskForm from "../../components/TaskForm";
import TaskResponse from "../../types/TaskResponse";
import TasksFilter from "../../components/TasksFilter";

const ListTasks: React.FC = () => {
  const {
    loading,
    error,
    tasks,
    createTask,
    setSelectedStatus,
    selectedStatus,
  } = useListTasksContext();
  const [isFormOpen, setIsFormOpen] = useState(false);

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
      <TasksFilter
        onFilterChange={setSelectedStatus}
        defaultValue={selectedStatus}
      />
      <IonContent>
        <IonList>
          {tasks?.map((task: TaskResponse) => (
            <TaskItem key={task?.id} task={task} />
          ))}
        </IonList>
        <IonFab vertical="bottom" horizontal="end">
          <IonFabButton
            onClick={() => setIsFormOpen(true)}
            className="ion-button-primary"
          >
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <TaskForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSave={(task) => {
            createTask(task);
            setIsFormOpen(false);
          }}
        />
      </IonContent>
    </IonPage>
  );
};

export default ListTasks;
