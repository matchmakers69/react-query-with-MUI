import Layout from "components/ui/Layout";
import Loadable from "components/ui/Loadable";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./service/routesMapper";

import NotFound from "pages/Status404";

const AppRoutes = () => {
  return (
    <Loadable>
      <Routes>
        <Route element={<Layout />}>
          {appRoutes.map((route) => {
            return (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            );
          })}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Loadable>
  );
};

export default AppRoutes;
