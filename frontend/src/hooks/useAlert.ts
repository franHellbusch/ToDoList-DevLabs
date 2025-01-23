import { useAlertContext } from "@/context/Alert/alertContext";

export const useAlert = () => {
  const context = useAlertContext();

  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }

  return context;
};
