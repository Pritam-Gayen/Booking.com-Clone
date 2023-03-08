import { Rating } from "@mui/material";
import React from "react";
import { Card, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { GetHotels } from "../Firebase/GetHotels";
import "./Hotel.css"

import hotelPic1 from "./Hotel-Images/hotel-guitar.jpg"
import hotelPic2 from "./Hotel-Images/hotel-lake.jpg"
import hotelPic3 from "./Hotel-Images/hotel-roadside.jpg"
import hotelPic4 from "./Hotel-Images/hotel-small.jpg"

const Hotels = () => {
    const hotelDetails = GetHotels();
    
    var someHotels = [
        {hotelImage: hotelPic1},
        {hotelImage: hotelPic2},
        {hotelImage: hotelPic3},
        {hotelImage: hotelPic4}]
    
    return(
        <>
          {hotelDetails.map((hotel, index) => (
           <Hotel key={index} hotelName={hotel.name} 
           hotelImage={someHotels[index].hotelImage}
           hotelAddress={hotel.address}
           hotelRating={hotel.rating}
           hotelNearByPlaces={hotel.near}
           hotelDescription={hotel.description}
           hotelCity={hotel.city}
           hotelId={hotel.id}/>
            ))}
        </>
    )
}

const Hotel = (props) => {
   
    return(
        <>
        <Card >
            <Card.Header as="h5" style={{textAlign: 'center'}}>{props.hotelName}</Card.Header>
            <Card.Body style={{display: 'flex', padding: '0px'}}>
                <Container className="hotel-img-holder">
                    <img className="hotel-img" src={props.hotelImage}/>
                </Container>
                <Container>
                    <Rating name="read-only" value={props.hotelRating} readOnly />
                    {/*TO DISPLAY HOTEL ID IN CARD <Card.Text>{props.hotelId}</Card.Text> */}
                    <Card.Text>{props.hotelAddress}</Card.Text>
                    <Card.Title>Attraction: <span style={{color:'blueviolet'}}>{props.hotelNearByPlaces}</span></Card.Title>
                    <Card.Text>{props.hotelDescription}</Card.Text>
                    <Link to="/hoteldetails" state={{hotelId: props.hotelId}}>
                        <Button variant="primary" style={{margin:'0 0 5px 0'}}>Ready to Go</Button>
                    </Link>
                </Container>
            </Card.Body>
        </Card>
        </>
    )
}

export {Hotel, Hotels}