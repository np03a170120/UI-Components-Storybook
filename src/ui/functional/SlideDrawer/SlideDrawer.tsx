import { Button, Drawer, DrawerProps, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode } from "react";

interface DrawerPropsExtended extends DrawerProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
  size?: "small" | "medium" | "large";
}

export function SlideDrawer({
  title,
  children,
  onClose,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
  size = "medium",
  ...props
}: DrawerPropsExtended) {
  const getWidth = () => {
    switch (size) {
      case "small":
        return "240px";
      case "medium":
        return "400px";
      case "large":
        return "600px";
      default:
        return "400px";
    }
  };

  return (
    <Drawer {...props} onClose={onClose}>
      <Box p={2} width={getWidth()}>
        <Typography variant="h6">{title}</Typography>
        <Box mt={2}>{children}</Box>
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button variant="text" onClick={onClose} color="error">
            {cancelText}
          </Button>
          {onConfirm && (
            <Button onClick={onConfirm} color="primary">
              {confirmText}
            </Button>
          )}
        </Box>
      </Box>
    </Drawer>
  );
}
