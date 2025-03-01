import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import "./theme/global.scss";

import "@ionic/react/css/core.css";

import Tasks from "./pages/ListTasks";

import ViewTask from "./pages/ViewTask";
import { ViewTaskProvider } from "./contexts/ViewTaskContext";
import { ListTasksProvider } from "./contexts/ListTasksContext";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/tasks">
          <ListTasksProvider>
            <Tasks />
          </ListTasksProvider>
        </Route>
        <Route path="/task/:id">
          <ViewTaskProvider>
            <ViewTask />
          </ViewTaskProvider>
        </Route>
        {/* Redirecionar para a página de tarefas caso não encontre nenhuma rota existente */}
        <Route>
          <Redirect to="/tasks" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
