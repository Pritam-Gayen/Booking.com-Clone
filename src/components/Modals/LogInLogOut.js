import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

function LogInLogOut() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link onClick={handleShow}>Log in</Nav.Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>Traveller Account Log In</Modal.Header>
        <Modal.Body style={{display:'flex', flexDirection:'column'}}>
          <TextField id="outlined-basic" label="E-mail" variant="outlined" style={{margin:'10px'}} autoFocus/>
          <TextField id="outlined-basic" label="Password" variant="outlined" style={{margin:'10px'}}/>
          <Button variant="outlined" disabled size='small' style={{margin:'10px'}}>Log In</Button>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default LogInLogOut