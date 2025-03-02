/**
 * Componente de alerta de confirmação reutilizável.
 *
 * @component
 * @example
 * ```tsx
 * <ConfirmationAlert
 *   isOpen={showAlert}
 *   onClose={() => setShowAlert(false)}
 *   onConfirm={handleConfirm}
 *   title="Excluir item"
 *   message="Tem certeza que deseja excluir este item?"
 * />
 * ```
 *
 * @param {boolean} isOpen - Define se o alerta está aberto ou fechado.
 * @param {() => void} onClose - Função chamada ao fechar o alerta sem confirmar.
 * @param {() => void} onConfirm - Função chamada ao confirmar a ação.
 * @param {string} [title] - Título opcional do alerta. Padrão: "Confirmar".
 * @param {string} message - Mensagem exibida no alerta.
 *
 * @returns {JSX.Element} Alerta de confirmação.
 */

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
