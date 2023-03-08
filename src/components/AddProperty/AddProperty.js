import { TextField } from "@mui/material";
import React from "react";
import { Button, Container } from "react-bootstrap";

const AddProperty = ()=>{
    return(
        <>
            <Container style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Container style={{display:'flex', flexDirection:'column', alignItems:'center', border:'solid white 1px', borderRadius: '10px', padding:'10px', margin:'10px'}}>
                    <h3>Please add hotel details</h3>
                    <TextField id="outlined-basic" label="Hotel Name (*must be unique)" variant="outlined" style={{margin:'10px'}} autoFocus/>
                    <TextField id="outlined-basic" label="Hotel Address" variant="outlined" style={{margin:'10px'}} />
                    <TextField id="outlined-basic" label="Rating" variant="outlined" style={{margin:'10px'}} />
                    <TextField id="outlined-basic" label="Near by places" variant="outlined" style={{margin:'10px'}} />
                    <TextField id="outlined-basic" label="City" variant="outlined" style={{margin:'10px'}} />
                    <TextField id="outlined-basic" label="Description" variant="outlined" style={{margin:'10px'}} />
                    <Button variant="outline-success">Add Hotel</Button>{' '}
                </Container>
            </Container>
        </>
    )
}

export {AddProperty};