import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import "./theme/global.scss";

import "@ionic/react/css/core.css";

import Home from "./pages/Home";
import Tasks from "./pages/Tasks";

import { TasksProvider } from "./contexts/TasksContext";
import ViewTask from "./pages/ViewTask";
import { ViewTaskProvider } from "./contexts/ViewTaskContext";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={Home} />
        <Route path="/tasks">
          <TasksProvider>
            <Tasks />
          </TasksProvider>
        </Route>
        <Route path="/task/:id">
          <ViewTaskProvider>
            <ViewTask />
          </ViewTaskProvider>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
