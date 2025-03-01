import React from "react";
import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import TaskResponse from "../../types/TaskResponse";

interface TaskFilterProps {
  onFilterChange: (status: TaskResponse["status"] | "all") => void;
  defaultValue?: TaskResponse["status"] | "all";
}

const TasksFilter: React.FC<TaskFilterProps> = ({
  onFilterChange,
  defaultValue,
}) => {
  return (
    <IonSegment
      value={defaultValue}
      onIonChange={(e: CustomEvent) => {
        onFilterChange(e.detail.value);
      }}
    >
      <IonSegmentButton value="all">
        <IonLabel>Todos</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="to do">
        <IonLabel>A Fazer</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="in progress">
        <IonLabel>Em Progresso</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="completed">
        <IonLabel>Concluídas</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default TasksFilter;
