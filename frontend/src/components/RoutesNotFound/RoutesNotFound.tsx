import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";

interface IRoutesNotFoundProps {
  children?: ReactNode;
}

const RoutesNotFound: React.FC<IRoutesNotFoundProps> = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RoutesNotFound;
