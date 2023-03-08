import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import allActions from "../Actions";
import { GetTravellers } from "../Firebase/GetTravellers";
import { UserProfile } from "../UserProfile/UserProfile";

const SignIn = () =>{
    const currentUser = useSelector(state => state.currentUser)
    const dispatch = useDispatch()

    const [travellerEmail, setTravellerEmail] = useState("");
    const [travellerPassword, setTravellerPassword] = useState("");
    // const [travellerMatch, setTravellerMatch] = useState(false);
    const allTraveller = GetTravellers();
    const navigate = useNavigate();
    var user = {};
    var travellerMatch = false;
    // console.log(allTraveller);

    const checkTraveller = () =>{
        allTraveller.map((item)=>{
            if(item.email === travellerEmail){
                if(item.password === travellerPassword){
                    travellerMatch = true;
                    user = item;
                }
            }
        })
        if(travellerMatch){
            console.log("logged In");
            dispatch(allActions.userActions.setUser(user))
            navigate("/userprofile");
        }
        else{
            console.log("no match found");
        }
    }

    return(
        <>
            <Container style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Container style={{display:'flex', flexDirection:'column', alignItems:'center', border:'solid white 1px', borderRadius: '10px', padding:'10px', margin:'10px'}}>
                    <h4>Traveller Log In</h4>   
                    <TextField id="outlined-basic" label="E-mail" variant="outlined" 
                    onChange={(event) => setTravellerEmail(event.target.value)} 
                    style={{margin:'10px'}}  autoFocus
                    />
                    <TextField id="outlined-basic" label="Password" variant="outlined" 
                    onChange={(event)=>setTravellerPassword(event.target.value)} type="password" 
                    style={{margin:'10px'}} 
                    />
                    {
                        currentUser.loggedIn ? 
                        <>
                        <Button variant="outline-success" onClick={() => dispatch(allActions.userActions.logOut())}>Log Out</Button>{' '}
                        </>
                        :
                        <>
                        <Button variant="outline-success" onClick={checkTraveller}>Log In</Button>{' '}
                        </>
                    }
                    
                </Container>

                <Container style={{display:'flex', flexDirection:'column', alignItems:'center', border:'solid white 1px', borderRadius: '10px', padding:'10px', margin:'10px'}}>
                    <h4>Partner Log In</h4>   
                    <TextField id="outlined-basic" label="E-mail" variant="outlined" style={{margin:'10px'}}  autoFocus/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" type="password" style={{margin:'10px'}} />
                    <Button variant="outline-success">Log In</Button>{' '}
                </Container>
            </Container>
        </>
    )
}

export {SignIn};