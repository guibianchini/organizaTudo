import React, { useState } from "react";
import { IonContent, IonPage, IonList, IonButton } from "@ionic/react";
import LoadingComponent from "../../components/LoadingComponent";
import ErrorComponent from "../../components/ErrorComponent";
import Header from "../../components/Header";
import Task from "../../services/tasks/types/Task";
import TaskItem from "../../components/TaskItem";
import { useTaskContext } from "../../contexts/TasksContext";
import TaskForm from "../../components/TaskForm";

const Tasks: React.FC = () => {
  const { loading, error, tasks, createTask, deleteTask } = useTaskContext();
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
      <IonContent>
        <IonList>
          {tasks?.map((task: Task) => (
            <TaskItem key={task?.id} task={task} onDelete={deleteTask} />
          ))}
        </IonList>
        <IonButton expand="full" onClick={() => setIsFormOpen(true)}>
          Nova Tarefa
        </IonButton>
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

export default Tasks;
