import MfeApps from "../MfeApps";
import { MfeAppsAppPage } from "../pages/MfeAppsAppPage/MfeAppsAppPage";
import { MfeAppsAppSettingsPage } from "../pages/MfeAppsAppSettingsPage/MfeAppsAppSettingsPage";
import { MfeAppsRoutes } from "./MfeAppsPath";

export const MfeAppRoutes = [
  {
    path: MfeAppsRoutes.ROOT,
    element: <MfeApps />,
  },
  {
    path: MfeAppsRoutes.APP_SETTINGS,
    element: <MfeAppsAppSettingsPage />,
  },
  {
    path: MfeAppsRoutes.APP,
    element: <MfeAppsAppPage />,
  },
];
