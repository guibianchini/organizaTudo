import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonButton,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  const history = useHistory();

  const navigateToTasks = () => {
    history.push("/tasks");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bem-vindo ao OrganizaTudo</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonButton expand="full" onClick={navigateToTasks}>
          Ir para as Tarefas
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
