import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonDatetimeButton,
  IonDatetime,
  IonText,
} from "@ionic/react";
import Task from "../../services/tasks/types/Task";

interface TaskFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ isOpen, onClose, onSave }) => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<Task>({
    defaultValues: {
      title: "",
      description: "",
      status: "to do",
      completed: false,
      creationDate: new Date().toISOString(),
      dueDate: null,
    },
  });

  const onSubmit = (data: Task) => {
    onSave({ ...data, updatedDate: null });
    reset();
  };

  const onDismiss = () => {
    onClose();
    clearErrors();
    reset();
  };

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onDismiss}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nova Tarefa</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onDismiss} color="primary">
              Fechar
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonItem>
            <IonLabel position="stacked">Título</IonLabel>
            <IonInput
              {...register("title", {
                required: "Título é obrigatório",
                maxLength: 100,
              })}
            />
            {errors?.title && (
              <IonText color="danger">
                <small>{errors?.title?.message}</small>
              </IonText>
            )}
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Descrição</IonLabel>
            <IonTextarea
              {...register("description", { maxLength: 500 })}
              autoGrow
            />
            {errors?.description && (
              <IonText color="danger">
                <small>{errors?.description?.message}</small>
              </IonText>
            )}
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Data Prevista</IonLabel>
            <Controller
              control={control}
              name="dueDate"
              render={({ field }) => (
                <>
                  <IonDatetimeButton datetime="datetime" className="pb-2" />
                  <IonModal keepContentsMounted={true}>
                    <IonDatetime
                      id="datetime"
                      prefer-wheel
                      min={new Date().toISOString()}
                      presentation="date"
                      onIonChange={(e) => field.onChange(e.detail.value)}
                    />
                  </IonModal>
                </>
              )}
            />
            {errors?.dueDate && (
              <IonText color="danger">
                <small>{errors?.dueDate?.message}</small>
              </IonText>
            )}
          </IonItem>

          <IonButton expand="full" type="submit" className="mt-3">
            Criar Tarefa
          </IonButton>
        </form>
      </IonContent>
    </IonModal>
  );
};

export default TaskForm;
