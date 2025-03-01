import React from "react";
import { IonAlert } from "@ionic/react";

interface ConfirmationAlertProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message: string;
}

const ConfirmationAlert: React.FC<ConfirmationAlertProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
}) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header={title || "Confirmar"}
      message={message}
      buttons={[
        {
          text: "Cancelar",
          role: "cancel",
          handler: onClose,
        },
        {
          text: "Confirmar",
          handler: onConfirm,
        },
      ]}
    />
  );
};

export default ConfirmationAlert;
