import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./MfeApps.scss";
import MfeAppsPage from "./pages/MfeAppsPage/MfeAppsPage";
import { MfeAppsAppSettingsPage } from "./pages/MfeAppsAppSettingsPage/MfeAppsAppSettingsPage";
import { MfeAppsAppPage } from "./pages/MfeAppsAppPage/MfeAppsAppPage";

function MfeApps() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MfeAppsPage />} />
        <Route
          path="/app/:appId/settings"
          element={<MfeAppsAppSettingsPage />}
        />
        <Route path="/app/:appId" element={<MfeAppsAppPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
export default MfeApps;
