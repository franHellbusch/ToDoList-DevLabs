import AuthGuard from "./guards/auth.guard";
import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./types/routes";
import { lazy, Suspense } from "react";
import RoutesNotFound from "./components/RoutesNotFound/RoutesNotFound";
import NoAuthGuard from "./guards/noauth.guard";
import Loader from "./components/Loader/Loader";
import AuthProtection from "./auth/authProtection";
import { useAuthInterceptor } from "./interceptors/useAuthInterceptor";
import { theme } from "./utils/theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { AppContainer } from "./styled-components";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AlertProvider } from "./context/Alert/alertProvider";
import { ModalProvider } from "./context/ModalContext/modalProvider";

const Login = lazy(() => import("./pages/Login/Login"));
const Private = lazy(() => import("./pages/private/Private"));

function App() {
  useAuthInterceptor();

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <AuthProtection>
          <AppContainer>
            <AlertProvider>
              <ModalProvider>
                <Suspense fallback={<Loader />}>
                  <RoutesNotFound>
                    <Route path='/' element={<Navigate to={`/${PrivateRoutes.PRIVATE}`} />} />
                    <Route element={<NoAuthGuard />}>
                      <Route path={PublicRoutes.LOGIN} element={<Login />} />
                    </Route>
                    <Route element={<AuthGuard />}>
                      <Route path={`/${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
                    </Route>
                  </RoutesNotFound>
                </Suspense>
              </ModalProvider>
            </AlertProvider>
          </AppContainer>
        </AuthProtection>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
