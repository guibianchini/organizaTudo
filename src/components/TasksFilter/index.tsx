/**
 * Componente de filtro de tarefas.
 *
 * @component
 * @example
 * ```tsx
 * <TasksFilter onFilterChange={(status) => someFunction(status)} defaultValue="all" />
 * ```
 *
 * @description
 * Este componente permite ao usuário filtrar as tarefas por status: todas, pendentes ou concluídas.
 * Ele utiliza o `IonSegment` do Ionic para exibir as opções de filtragem.
 *
 * @param {Object} props - Propriedades do componente.
 * @param {("all" | "pending" | "completed")} [props.defaultValue] - O status inicial selecionado.
 * @param {(status: "all" | "pending" | "completed") => void} props.onFilterChange - Callback chamado ao mudar o filtro.
 *
 * @returns {JSX.Element} Segmento de filtro de tarefas.
 */

import React from "react";
import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";

interface TaskFilterProps {
  onFilterChange: (status: "all" | "pending" | "completed") => void;
  defaultValue?: "all" | "pending" | "completed";
}

const TasksFilter: React.FC<TaskFilterProps> = ({
  onFilterChange,
  defaultValue,
}) => {
  return (
    <IonSegment
      className="custom-segment"
      value={defaultValue}
      mode="md"
      onIonChange={(e: CustomEvent) => {
        onFilterChange(e.detail.value);
      }}
    >
      <IonSegmentButton value="all">
        <IonLabel>Todos</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="pending">
        <IonLabel>Pendentes</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="completed">
        <IonLabel>Concluídas</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default TasksFilter;
