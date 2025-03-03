/**
 * Componente de formulário para criação e edição de tarefas.
 *
 * Este modal permite que o usuário insira ou edite detalhes de uma tarefa,
 * incluindo título, descrição, status e data prevista de conclusão.
 *
 * @component
 * @example
 * ```tsx
 * <TaskForm
 *   isOpen={isFormOpen}
 *   onClose={() => setIsFormOpen(false)}
 *   onSave={(task) => handleSave(task)}
 * />
 * ```
 */

import React, { useEffect } from "react";
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
  IonIcon,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import TaskResponse from "../../types/TaskResponse";
import { close } from "ionicons/icons";

/**
 * Propriedades esperadas pelo componente TaskForm.
 */
interface TaskFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: TaskResponse) => void;
  initialData?: TaskResponse;
}

const TaskForm: React.FC<TaskFormProps> = ({
  isOpen,
  onClose,
  onSave,
  initialData,
}) => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<TaskResponse>({
    defaultValues: initialData || {
      title: "",
      description: "",
      status: "to do",
      completed: false,
      creationDate: new Date().toISOString(),
      dueDate: null,
    },
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const onSubmit = (data: TaskResponse) => {
    onSave({ ...data, updatedDate: isEdit ? new Date().toISOString() : null });
    reset();
  };

  const onDismiss = () => {
    onClose();
    clearErrors();
    reset();
  };

  const isEdit = !!initialData;

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onDismiss}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nova Tarefa</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onDismiss}>
              <IonIcon
                slot="icon-only"
                icon={close}
                className="ion-icon-primary"
              />
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
          <IonItem hidden={!isEdit}>
            <IonLabel position="stacked">Status</IonLabel>
            <Controller
              control={control}
              name="status"
              render={({ field }) => (
                <IonSelect
                  {...field}
                  onIonChange={(e) => field.onChange(e.detail.value)}
                >
                  <IonSelectOption value="to do">A Fazer</IonSelectOption>
                  <IonSelectOption value="in progress">
                    Em Progresso
                  </IonSelectOption>
                  <IonSelectOption value="completed">Concluído</IonSelectOption>
                </IonSelect>
              )}
            />
            {errors?.status && (
              <IonText color="danger">
                <small>{errors?.status?.message}</small>
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
                      {...field}
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

          <IonButton
            expand="full"
            type="submit"
            className="mt-3 ion-button-primary"
          >
            {isEdit ? "Salvar" : "Criar"}
          </IonButton>
        </form>
      </IonContent>
    </IonModal>
  );
};

export default TaskForm;
