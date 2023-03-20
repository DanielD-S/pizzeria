// Popup.js
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const Popup = ({ open, onClose, imageSrc, alt }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <IconButton
        edge="end"
        color="inherit"
        onClick={onClose}
        aria-label="close"
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <div style={{textAlign:'center'}}>
        <h1>Bienvenido a ¡Pizzeria Mamma Mia!</h1>
        <img src={imageSrc} alt={alt} style={{ width: '100%', height: 'auto' }} />
        <h4 >Pizza de la Semana: Napolitana</h4>
        </div>
       
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
