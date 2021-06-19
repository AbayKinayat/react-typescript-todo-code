import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, Button, DialogActions, } from '@material-ui/core';

interface DeleteModalProps {
  title: string,
  open: boolean,
  handleClose(): void,
  Delete(): void
}

const DeleteModal: React.FC<DeleteModalProps> = (props) => {
  
  return (
    <Dialog
      open={props.open}
      keepMounted
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">{"Удаление"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Вы действительно хотите удалить данное Todo?
        </DialogContentText>
        <div style={{fontSize: 20}}>{props.title}</div>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Отмена
        </Button>
        <Button color="secondary" onClick={props.Delete}>
          Удалить
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteModal;