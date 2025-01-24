import { Route } from "react-router-dom";
import { lazy } from "react";
import RoutesNotFound from "@/components/RoutesNotFound/RoutesNotFound";
import { PrivateRoutes } from "@/types/routes";
import Navbar from "./components/Navbar/Navbar";

const Home = lazy(() => import("./Home/Home"));

/**
 * Private component.
 * Renders the main content of the application for authenticated users. 
 */
const Private: React.FC = () => {
  return (
    <>
      <Navbar />
      <RoutesNotFound>
        <Route path={PrivateRoutes.HOME} element={<Home />} />
      </RoutesNotFound>
    </>
  );
};

export default Private;
