import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { MfeAppsStore } from "../../store/MfeAppsStore";
import { BrowserRouter } from "react-router-dom";
import MfeAppsRouter from "../routes/MfeAppsRouter";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <BrowserRouter>
    <Provider store={MfeAppsStore}>
      <MfeAppsRouter />
    </Provider>
  </BrowserRouter>,
);
