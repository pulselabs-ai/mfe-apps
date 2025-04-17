import { Navigate, Routes, useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import "./MfaApp.scss";
import MfaAppsPage from "./pages/MfaAppsPage/MfaAppsPage";
import { MfaAppSettingsPage } from "./pages/MfaAppSettingsPage/MfaAppSettingsPage";
import { MfaAppPage } from "./pages/MfaAppPage/MfaAppPage";

function MfaApp() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<MfaAppsPage />} />
        <Route path="/:appId" element={<MfaAppPage />} />
        <Route
          path="/:appId/settings"
          element={<MfaAppSettingsPage />}
        />
        
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        <Route path="*" element={<div>Not Found in MfaApp {location.pathname} </div>} />
      </Routes>
    </>
  );
}
export default MfaApp;
