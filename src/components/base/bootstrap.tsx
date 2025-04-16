import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { MfaStore } from "../../store/MfaStore";
import MfaRouter from "../../components/routes/MfaRouter";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <BrowserRouter>
    <Provider store={MfaStore}>
      <MfaRouter /> 
    </Provider>
  </BrowserRouter>,
);
