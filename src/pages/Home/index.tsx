import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonButton,
} from "@ionic/react";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bem-vindo ao OrganizaTudo</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonButton expand="full" routerLink="/tasks">
          Ir para as Tarefas
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
