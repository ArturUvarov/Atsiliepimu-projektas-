import { Routes, Route } from "react-router-dom";
import { Sidenav, Footer } from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController } from "@/context";
import { Spinner } from "@material-tailwind/react";
import { useState } from "react";
import { Breadcrumbs } from "./BreadCrumbs";

export function Dashboard() {
  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        routes={routes}
        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
      />
      <div className="p-4 xl:ml-80">
        <Breadcrumbs />
        {loading ? (
          <div className="flex h-screen items-center justify-center">
            <Spinner className="h-12 w-12" />
          </div>
        ) : (
          <Routes>
            {routes.map(
              ({ layout, pages }) =>
                layout === "dashboard" &&
                pages.map(({ path, element }) => (
                  <Route key={path} exact path={path} element={element} />
                )),
            )}
          </Routes>
        )}
        <div className="mt-auto text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
