import { Button, TextField } from "@mui/material"

import React from "react"
import { useState } from "react"
import { Modal, Nav } from "react-bootstrap"


const Register = () =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
          <Nav.Link onClick={handleShow}>Register</Nav.Link>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>REGISTER</Modal.Header>
            <Modal.Body style={{display:'flex', flexDirection:'column'}}>
              <TextField id="outlined-basic" label="E-mail" variant="outlined" style={{margin:'10px'}} autoFocus/>
              <TextField id="outlined-basic" label="Password" variant="outlined" style={{margin:'10px'}}/>
              <TextField id="outlined-basic" label="First Name" variant="outlined" style={{margin:'10px'}}/>
              <TextField id="outlined-basic" label="Last Name" variant="outlined" style={{margin:'10px'}}/>
              <TextField id="outlined-basic" label="Nationality" variant="outlined" style={{margin:'10px'}}/>
              <TextField id="outlined-basic" label="Resident Country" variant="outlined" style={{margin:'10px'}}/>
              <TextField id="outlined-basic" label="City" variant="outlined" style={{margin:'10px'}}/>
              <Button variant="outlined" disabled size='small' style={{margin:'10px'}}>Register</Button>
            </Modal.Body>
          </Modal>
        </>
      )
}

export default Register;