import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {
  lazy,
  Suspense,
} from "react";

import Skeleton from "../components/common/Skeleton";

const Home = lazy(() =>
  import("../pages/Home/Home")
);

const Dashboard = lazy(() =>
  import(
    "../pages/Dashboard/Dashboard"
  )
);

const Compare = lazy(() =>
  import(
    "../pages/compare/Compare"
  )
);

function AppRoutes() {
  return (
    <BrowserRouter>

      <Suspense
        fallback={
          <div className="container py-5">
            <Skeleton />
          </div>
        }
      >

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/dashboard/:username"
            element={<Dashboard />}
          />

          <Route
            path="/compare"
            element={<Compare />}
          />

        </Routes>

      </Suspense>

    </BrowserRouter>
  );
}

export default AppRoutes;