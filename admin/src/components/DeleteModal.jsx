import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function DeleteModal({ open, setOpen, handleDelete }) {

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDeleteConfirm = () => {
        handleDelete();
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
                <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
                    Confirm Delete
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} gutterBottom>
                    Are you sure you want to delete this item?
                </Typography>
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button onClick={handleClose} color="primary" variant="outlined" sx={{ mr: 1 }}>
                        Cancel
                    </Button>
                    <Button onClick={handleDeleteConfirm} color="error" variant="contained">
                        Delete
                    </Button>
                </Box>
            </Box>
        </Modal>

    );
}
