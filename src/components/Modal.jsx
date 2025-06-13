import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { X } from 'lucide-react';



const sizeMap = {
  sm: 'xs',
  md: 'sm',
  lg: 'md',
  xl: 'lg',
} 

const Modal = ({ isOpen, onClose, title, children, footer, size = 'md' }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      fullWidth
      fullScreen={fullScreen}
      maxWidth={sizeMap[size]}
    >
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between' }}>
        <span>{title}</span>
        <IconButton onClick={onClose} size="small">
          <X size={20} />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ maxHeight: '70vh' }}>
        {children}
      </DialogContent>

      {footer && <DialogActions>{footer}</DialogActions>}
    </Dialog>
  );
};

export default Modal;
