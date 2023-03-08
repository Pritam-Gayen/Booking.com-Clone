import { Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetBooking } from "../Firebase/GetBooking";
import { GetFlightBookingData } from "../Firebase/GetFlightBookingData";
import { BookingCard } from "./BookingCard";
import { FlightBookingCard } from "./FlightBookingCard";



const UserProfile = () =>{
    
    const currentUser = useSelector(state => state.currentUser)
    // const dispatch = useDispatch()
    console.log(currentUser.user);
    const bookingDetails = GetBooking();
    const flightBookingData = GetFlightBookingData();
    var personalBookingDetails = [];
    var personalFlightBookingDetails = [];

    bookingDetails.map((item)=>{
        if(item.userid === currentUser.user.id){
            personalBookingDetails.push(item);
        }
    })

    flightBookingData.map((item)=>{
        if(item.userid === currentUser.user.id) {
            personalFlightBookingDetails.push(item);
        }
    })
    // console.log("personalBookingDetails: " + personalBookingDetails);

    return(
        <>
            <Container style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Container style={{display:'flex', flexDirection:'column', alignItems:'center', border:'solid white 1px', borderRadius: '10px', padding:'10px', margin:'10px'}}>
                    <h4>User Details</h4>
                    <Typography>Name: 
                        <span style={{color:'rebeccapurple'}}>
                            {currentUser.user.firstname} {currentUser.user.lastname}
                        </span>
                    </Typography>
                    <Typography>E-mail:
                        <span style={{color:'red'}}>
                            {currentUser.user.email}
                        </span>
                    </Typography>
                </Container>
                <Container style={{display:'flex', flexDirection:'column', alignItems:'center', border:'solid white 1px', borderRadius: '10px', padding:'10px', margin:'10px'}}>
                    <h4>Hotel Booking Details</h4>
                    {
                        personalBookingDetails.map((item, index)=>{
                            return(
                                <React.Fragment key={index}>
                                    <BookingCard  bill={item.bill} checkIn={item.checkin} checkOut={item.checkout}
                                    hotelName={item.hotelname} style={{margin:'20px'}}/>
                                    <br></br>
                                </ React.Fragment>
                            )
                        })
                    }
                </Container>
                <Container style={{display:'flex', flexDirection:'column', alignItems:'center', border:'solid white 1px', borderRadius: '10px', padding:'10px', margin:'10px'}}>
                    <h4>Flight Booking Details</h4>
                    {
                        personalFlightBookingDetails.map((item, index)=>{
                            return(
                                <React.Fragment key={index}>
                                    <FlightBookingCard  airlineName={item.airlinename} price={item.price}
                                    from={item.from} to={item.to} duration={item.duration} via={item.via} />
                                    <br></br>
                                </ React.Fragment>
                            )
                        })
                    }
                </Container>
            </Container>
        </>
    )
}

export {UserProfile};