import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { Modal } from "./Modal";

export default {
  title: "Modal",
  component: Modal,
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
      description: "lg, md, sm, xl, xs",
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
        Open Modal
      </Button>

      <Modal
        size="sm"
        open={open}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title="Title of The Modal"
        confirmText="Save"
        cancelText="Cancel"
      >
        {/* Modal Content */}
        <Typography>Content for the modal</Typography>
        {/*  */}
      </Modal>
    </>
  );
};
