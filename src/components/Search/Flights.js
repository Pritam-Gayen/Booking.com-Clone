import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FlightCard } from "./FlightCard";

const Flights = () => {
    const date = new Date();
    const today = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) + 
                    '-' + date.getDate().toString().padStart(2, 0);
    const [flightData, setFlightData] = useState([]);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    const getDataFromApi = async()=>{
        try {
            const response = await axios.get("https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights")
            setFlightData(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        getDataFromApi();
      },[])
    // getDataFromApi();
    console.log(flightData);
    
    const doFlightFilter = () =>{
        var filterFlights = [];
        flightData.map((item)=>{
            if(item.from === from && item.to === to){
                filterFlights.push(item);
            }
        })
        setFlightData(filterFlights);
    }

    return(
        <>
            <Container style={{alignItems: 'center'}}>
                <TextField
                    id="filled-helperText"
                    label="From"
                    // defaultValue={today}
                    // helperText="Some important text"
                    variant="filled" onChange={(event)=>setFrom(event.target.value)}
                />
                <TextField
                    id="filled-helperText"
                    label="To"
                    // defaultValue={today}
                    // helperText="Some important text"
                    variant="filled" onChange={(event)=>setTo(event.target.value)}
                />
                <Button variant="contained" style={{backgroundColor:'green'}}
                onClick={doFlightFilter}>
                    Search
                </Button>
                <TextField
                    id="filled-helperText"
                    label="Departure"
                    defaultValue={today}
                    // helperText="Some important text"
                    variant="filled"
                    type="date"
                />
                <TextField
                    id="filled-helperText"
                    label="Return"
                    defaultValue={today}
                    // helperText="Some important text"
                    variant="filled"
                    type="date"
                />
            </Container>
            <br></br>
            <Container>
            {
                flightData.map((item, index)=>{
                    return(
                        <Container key={index}>
                            <FlightCard  from={item.from} to={item.to} departure={item.departure}
                            return={item.return} airlineName={item.airlineName} via={item.via}
                            price={item.price} duration={item.duration} style={{margin:'20px'}}/>
                            <br></br>
                        </Container>
                    )
                })
            }
            </Container>
        </>
    )
}
export {Flights}