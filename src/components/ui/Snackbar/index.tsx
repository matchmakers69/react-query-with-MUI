import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CloseIcon from "@mui/icons-material/Close";
import { Container } from "@mui/material";
import { SnackbarContent, useSnackbar } from "notistack";
import { forwardRef, ReactNode, useCallback } from "react";

interface SnackbarProps {
  id: string | number;
  message: ReactNode;
  variant: "success" | "error" | "warning";
}

const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(function Snackbar(
  { id, message, variant },
  ref
) {
  const { closeSnackbar } = useSnackbar();
  const handleCloseSnackbar = useCallback(() => {
    closeSnackbar(id);
  }, [id, closeSnackbar]);
  return (
    <SnackbarContent ref={ref}>
      <Container>
        {variant === "success" ? <CheckCircleIcon /> : <AccessTimeIcon />}
        <div>
          {message}
          <button onClick={handleCloseSnackbar}>
            <div>Close snackbar</div>
            <CloseIcon aria-hidden />
          </button>
        </div>
      </Container>
    </SnackbarContent>
  );
});

export default Snackbar;
