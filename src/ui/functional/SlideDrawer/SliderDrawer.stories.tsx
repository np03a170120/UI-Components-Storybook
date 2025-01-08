import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { SlideDrawer } from "./SlideDrawer";

export default {
  title: "SlideDrawer",
  component: SlideDrawer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.",
      },
    },
  },
  argTypes: {
    size: {
      description: "small, medium, large",
    },
  },
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleConfirm = () => {
    console.log("Confirmed!");
    setOpen(false);
  };
  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Drawer
      </Button>
      <SlideDrawer
        size="small"
        open={open}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title="Slider Drawer Title"
        anchor="left"
        confirmText="Save"
        cancelText="Dismiss"
      >
        {/* Drawer Content */}
        <Typography>Drawer content here</Typography>
        {/*  */}
      </SlideDrawer>
    </>
  );
};
