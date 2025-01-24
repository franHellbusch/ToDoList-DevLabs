import { useState } from "react";
import { ITask } from "@/interfaces/ITask";
import { ModalContext, modalModes, ModalState } from "./modalContext";
import { Backdrop, Fade, Modal } from "@mui/material";
import CreateTaskModal from "@/components/CreateTaskModal/CreateTaskModal";
import UpdateTaskModal from "@/components/UpdateTaskModal/UpdateTaskModal";

/**
 * Manages the visibility, mode, and selected task for the modal.
 */
export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    mode: modalModes.CREATE_TASK,
    selectedTask: null,
  });

  const hideModal = () => {
    setModalState({
      isOpen: false,
      mode: modalState.mode,
      selectedTask: null,
    });
  };

  const showCreateTaskModal = () => {
    setModalState({
      isOpen: true,
      mode: modalModes.CREATE_TASK,
      selectedTask: null,
    });
  };

  const showUpdateTaskModal = (selectedTask: ITask) => {
    setModalState({
      isOpen: true,
      mode: modalModes.UPDATE_TASK,
      selectedTask,
    });
  };

  return (
    <ModalContext.Provider
      value={{
        ...modalState,
        hideModal,
        showCreateTaskModal,
        showUpdateTaskModal,
      }}
    >
      <Modal
        open={modalState.isOpen}
        onClose={hideModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={modalState.isOpen}>
          <div>
            {modalState.mode === modalModes.CREATE_TASK && (
              <CreateTaskModal onClose={hideModal} />
            )}
            {modalState.mode === modalModes.UPDATE_TASK &&
              modalState.selectedTask && (
                <UpdateTaskModal
                  onClose={hideModal}
                  selectedTask={modalState.selectedTask}
                />
              )}
          </div>
        </Fade>
      </Modal>
      {children}
    </ModalContext.Provider>
  );
};
