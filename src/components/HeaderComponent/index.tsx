import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
} from "@ionic/react";

interface HeaderProps {
  title: string;
  goBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, goBack = false }) => {
  return (
    <IonHeader>
      <IonToolbar>
        {goBack === true && (
          <IonButtons slot="start">
            <IonBackButton
              defaultHref="/"
              text={""}
              className="ion-icon-primary"
            />
          </IonButtons>
        )}
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
