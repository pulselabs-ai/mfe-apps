import { Route, Routes } from "react-router-dom";
import { MfaAppRoutes } from "./MfaRoute";

const MfaRouter = () => {
  const renderRoutes = (routeList: any, parentPath = "") => {
    return routeList.map((route: any) => {
      const fullPath = parentPath
        ? `${parentPath}/${route.path}`.replace(/\/+/g, "/")
        : route.path;

      if (route.children && route.children.length > 0) {
        return (
          <Route key={fullPath} path={route.path} element={route.element}>
            {renderRoutes(route.children, fullPath)}
          </Route>
        );
      }
      return <Route key={fullPath} path={route.path} element={route.element} />;
    });
  };

  return <Routes>{renderRoutes(MfaAppRoutes)}</Routes>;
};

export default MfaRouter;
