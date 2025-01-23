import { render, screen } from "@testing-library/react";
import CreateTaskModal from "./CreateTaskModal";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ModalProvider } from "@/context/ModalContext/modalProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

describe("CreateTaskModal", () => {
  it("renders the form correctly and verifies required fields", () => {
    const queryClient = new QueryClient();

    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ModalProvider>
              <CreateTaskModal onClose={() => {}} />
            </ModalProvider>
          </LocalizationProvider>
        </QueryClientProvider>
      </Provider>,
    );

    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Due Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Priority/i)).toBeInTheDocument();
  });
});
