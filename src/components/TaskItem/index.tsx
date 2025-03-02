/**
 * Componente `TaskItem` exibe as informações de uma tarefa dentro de um cartão interativo.
 * Ele recebe um objeto `task` contendo os dados da tarefa, e dependendo do status da tarefa,
 * exibe um ícone e um texto associados, com a possibilidade de navegar para uma página de detalhes.
 *
 * @component
 * @example
 * // Exemplo de uso do componente `TaskItem`:
 * <TaskItem task={task} />
 *
 * @param {Object} props - Propriedades passadas para o componente.
 * @param {TaskResponse} props.task - O objeto `task` que contém as informações da tarefa a ser exibida.
 *
 * @returns {JSX.Element | null} Retorna um cartão (`IonCard`) com título, subtítulo e status da tarefa.
 * Se o objeto `task` estiver ausente, retorna `null`.
 */

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

/**
 * Componente responsável por exibir uma tarefa em forma de cartão.
 * @param {Props} props - As propriedades do componente.
 * @param {TaskResponse} props.task - Dados da tarefa a ser exibida.
 */

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
