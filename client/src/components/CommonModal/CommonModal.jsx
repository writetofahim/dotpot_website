import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CommonModal({
  open,
  setOpen,
  handler,
  message,
  buttonTitle,
  title,
}) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDeleteConfirm = () => {
    handler();
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }} gutterBottom>
          {message}
        </Typography>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={handleClose}
            color="primary"
            variant="outlined"
            sx={{ mr: 1 }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleDeleteConfirm}
            color="error"
            variant="contained"
          >
            {buttonTitle}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
