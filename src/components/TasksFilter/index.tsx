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
