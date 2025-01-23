import { useState } from "react";
import { AlertContext } from "./alertContext";
import { Alert, Snackbar } from "@mui/material";

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<
    "error" | "info" | "success" | "warning"
  >("info");

  const showAlert = (
    newMessage: string,
    newSeverity: "error" | "info" | "success" | "warning" = "info",
  ) => {
    setMessage(newMessage);
    setSeverity(newSeverity);
    setIsOpen(true);
  };

  const hideAlert = () => {
    setIsOpen(false);
  };

  return (
    <AlertContext.Provider
      value={{ isOpen, message, severity, showAlert, hideAlert }}
    >
      {children}
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={hideAlert}>
        <Alert onClose={hideAlert} severity={severity} variant="filled">
          {message}
        </Alert>
      </Snackbar>
    </AlertContext.Provider>
  );
};
