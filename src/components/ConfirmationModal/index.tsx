import React from "react";
import { IonModal, IonLabel, IonButton } from "@ionic/react";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  message,
}) => {
  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose}>
      <IonLabel>
        <h3>{message}</h3>
        <IonButton color="danger" onClick={onConfirm}>
          Confirmar
        </IonButton>
        <IonButton color="secondary" onClick={onClose}>
          Cancelar
        </IonButton>
      </IonLabel>
    </IonModal>
  );
};

export default ConfirmationModal;
