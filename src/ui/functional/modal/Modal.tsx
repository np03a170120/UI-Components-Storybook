import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
} from "@mui/material";
import { ReactNode } from "react";

interface ModalProps extends DialogProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
  size?: DialogProps["maxWidth"];
}

export function Modal({
  title,
  children,
  onClose,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
  size = "sm",
  ...props
}: ModalProps) {
  return (
    <Dialog {...props} onClose={onClose} fullWidth maxWidth={size}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          {cancelText}
        </Button>
        {onConfirm && (
          <Button onClick={onConfirm} color="primary">
            {confirmText}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
