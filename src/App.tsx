import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import "./theme/global.scss";

import "@ionic/react/css/core.css";

import Home from "./pages/Home";
import Tasks from "./pages/ListTasks";

import ViewTask from "./pages/ViewTask";
import { ViewTaskProvider } from "./contexts/ViewTaskContext";
import { ListTasksProvider } from "./contexts/ListTasksContext";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={Home} />
        <Route path="/tasks">
          <ListTasksProvider>
            <Tasks />
          </ListTasksProvider>
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
