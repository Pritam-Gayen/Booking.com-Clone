import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { GetTravellers } from "../Firebase/GetTravellers";
import { db } from "../Firebase/FirebaseConfig";

const initialError = {email: "", password: ""};

const Register = () =>{
    const [travellerEmail, setTravellerEmail] = useState("");
    const [travellerPassword, setTravellerPassword] = useState("");
    const [travellerFirstName, setTravellerFirstName] = useState("");
    const [travellerLastName, setTravellerLastName] = useState("");
    const [error, setError] = useState(initialError);
    const allTravellerEmails = GetTravellers();

    // console.log(allTravellerEmails);

    const createTravellerAccount = async()=>{
        setError(initialError);
        const emailRegex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
        let isValid = true;

        if(!emailRegex.test(travellerEmail)) {
            setError((prevState) => {
              return { ...prevState, email: "Email is invalid" };
            });
            isValid = false;
        }

        if(travellerPassword.length < 6) {
            setError((prevState) => {
              return {...prevState, password: "Password must be at least 6 characters"};
            });
            isValid = false;
        }

        allTravellerEmails.map((item)=>{
            if(item.email === travellerEmail){
                setError((prevState) => {
                    return { ...prevState, email: "Email already taken" };
                });
                isValid = false;
            }
            console.log(item.email);
        })

        if(!isValid) {
            return;
        }

        const docRef = await addDoc(collection(db, "traveller"), 
        {email: travellerEmail, password: travellerPassword, firstname: travellerFirstName, 
        lastname: travellerLastName
        });
        // console.log(docRef.id);  
    }

    return(
        <>
        <Container style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Container style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label" style={{fontWeight:'bold'}}>Please select what type of account you want to create</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="traveller"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="customer" control={<Radio />} label="Traveller Account" />
                        <FormControlLabel value="partner" control={<Radio />} label="Partner Account" />
                    </RadioGroup>
                </FormControl>
            </Container>
            <Container style={{display:'flex', flexDirection:'column', alignItems:'center', border:'solid white 1px', borderRadius: '10px', padding:'10px', margin:'10px'}}>
                <h4>Traveller Details</h4>   
                <TextField id="outlined-basic" label="E-mail" variant="outlined" error={error.email !== ""}
                helperText={error.email} style={{margin:'10px'}} 
                onChange={(event)=>setTravellerEmail(event.target.value)}/>

                <TextField id="outlined-basic" label="Password" variant="outlined" style={{margin:'10px'}} 
                error={error.password !== ""} helperText={error.password}
                onChange={(event)=>setTravellerPassword(event.target.value)}/>
                
                <TextField id="outlined-basic" label="First Name" variant="outlined" style={{margin:'10px'}} 
                onChange={(event)=>setTravellerFirstName(event.target.value)}/>
                
                <TextField id="outlined-basic" label="Last Name" variant="outlined" style={{margin:'10px'}} 
                onChange={(event)=>setTravellerLastName(event.target.value)}/>
                
                <Button variant="outline-success" onClick={createTravellerAccount}>Register</Button>{' '}
            </Container>
            <Container style={{display:'flex', flexDirection:'column', alignItems:'center', border:'solid white 1px', borderRadius: '10px', padding:'10px', margin:'10px'}}>
                <h4>Partner Details</h4>   
                <TextField id="outlined-basic" label="E-mail" variant="outlined" style={{margin:'10px'}} />
                <TextField id="outlined-basic" label="Password" variant="outlined" style={{margin:'10px'}} />
                <TextField id="outlined-basic" label="First Name" variant="outlined" style={{margin:'10px'}} />
                <TextField id="outlined-basic" label="Last Name" variant="outlined" style={{margin:'10px'}} />
                <Button variant="outline-success">Register</Button>{' '}
            </Container>
        </Container>
        </>
    )
}

export {Register};