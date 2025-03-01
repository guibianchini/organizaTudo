import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

// import "@ionic/react/css/palettes/dark.system.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Theme variables */
import "./style/theme/variables.css";

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
