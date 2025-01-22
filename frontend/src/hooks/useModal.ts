import { useModalContext } from "@/context/ModalContext/modalContext";

export const useModal = () => {
  const context = useModalContext();

  if (!context) {
    throw new Error("useModal must be used within an ModalProvider");
  }

  return context;
};
