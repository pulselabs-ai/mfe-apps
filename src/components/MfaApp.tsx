import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./MfaApp.scss";
import MfaAppsPage from "./pages/MfaAppsPage/MfaAppsPage";
import { MfaAppSettingsPage } from "./pages/MfaAppSettingsPage/MfaAppSettingsPage";
import { MfaAppPage } from "./pages/MfaAppPage/MfaAppPage";

function MfaApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MfaAppsPage />} />
        <Route
          path="/app/:appId/settings"
          element={<MfaAppSettingsPage />}
        />
        <Route path="/app/:appId" element={<MfaAppPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
export default MfaApp;
