import { Route, Routes, useLocation } from "react-router-dom";
import { MfaAppRoutes } from "./MfaRoute";

const MfaRouter = () => {
  const location = useLocation();
  console.log("MFE Received Path:", location.pathname);

  const renderRoutes = (routeList: any, parentPath = "") => {
    return routeList.map((route: any) => {
      const fullPath = parentPath
        ? `${parentPath}/${route.path}`.replace(/\/+/g, "/")
        : route.path;

      if (route.children && route.children.length > 0) {
        console.log("Route:", route.path, route.element.type.name);
        return (
          <Route key={fullPath} path={route.path} element={route.element}>
            {renderRoutes(route.children, fullPath)}
          </Route>
        );
      }
      console.log("Route2:", route.path, route.element.type.name);
      console.log("Route2:", route);
      return <Route key={fullPath} path={route.path} element={route.element} />;
    });
  };

  console.log(renderRoutes(MfaAppRoutes));
  return (
    <>
      {/* <div style={{ backgroundColor: "lightyellow", padding: "5px", marginBottom: "10px" }}>
        DEBUG: MFE Base Path: {location.pathname}
      </div> */}
      {/* <div>{renderRoutes(MfaAppRoutes)}</div> */}
      
      <Routes>{renderRoutes(MfaAppRoutes)}</Routes>
    </>
  );
};

export default MfaRouter;
