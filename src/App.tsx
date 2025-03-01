import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import "./theme/global.scss";

import "@ionic/react/css/core.css";

import Home from "./pages/Home";
import Tasks from "./pages/Tasks";

import { TaskProvider } from "./contexts/TasksContext";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" component={Home} exact />
        <TaskProvider>
          <Route path="/tasks" component={Tasks} exact />
        </TaskProvider>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
