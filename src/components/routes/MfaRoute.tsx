import MfaAppsPage from "../pages/MfaAppsPage/MfaAppsPage";
import { MfaAppPage } from "../pages/MfaAppPage/MfaAppPage";
import { MfaAppSettingsPage } from "../pages/MfaAppSettingsPage/MfaAppSettingsPage";
import { MfaRoutes } from "./MfaPath";

export const MfaAppRoutes = [
  {
    path: MfaRoutes.ROOT,
    element: <MfaAppsPage />,
  },
  {
    path: '/app',
    element: <MfaAppsPage />,
  },
  {
    path: MfaRoutes.APP_SETTINGS,
    element: <MfaAppSettingsPage />,
  },
  {
    path: MfaRoutes.APP,
    element: <MfaAppPage />,
  },
];
