import { Button, Container, TextField } from "@mui/material";
import { green } from "@mui/material/colors";
import React, { useState } from "react";
import { GetHotels } from "../Firebase/GetHotels";
import { Hotel } from "../Hotel/Hotel";

import hotelPic1 from "../Hotel/Hotel-Images/hotel-guitar.jpg"
import hotelPic2 from "../Hotel/Hotel-Images/hotel-lake.jpg"
import hotelPic3 from "../Hotel/Hotel-Images/hotel-roadside.jpg"
import hotelPic4 from "../Hotel/Hotel-Images/hotel-small.jpg"

const Destination = () => {
    var hotelImages = [
        {hotelImage: hotelPic1},
        {hotelImage: hotelPic2},
        {hotelImage: hotelPic3},
        {hotelImage: hotelPic4}]

    const date = new Date();
    const today = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) + 
                    '-' + date.getDate().toString().padStart(2, 0);

    const hotels = GetHotels();
    const [filterHotelString, setFilterHotelString] = useState("");
    const [renderFilteredHotel, setRenderFilteredHotel] = useState(hotels);
    var filteredHotel = [];
    
    
    const doHotelFilter = ()=>{
        hotels.map((hotel)=>{
            if(hotel.city === filterHotelString){
                filteredHotel.push(hotel);
            }
        })
        setRenderFilteredHotel(filteredHotel);
        console.log(filteredHotel);
    }

    return(
        <>
            <Container style={{alignItems: 'center'}}>
                <TextField
                    id="filled-helperText"
                    label="Location"
                    // defaultValue={today}
                    // helperText="Some important text"
                    variant="filled" onChange={(event)=>setFilterHotelString(event.target.value)}
                />
                <Button variant="contained" style={{backgroundColor:'green'}}
                onClick={doHotelFilter}>
                    Search
                </Button>
                <TextField
                    id="filled-helperText"
                    label="Check-In"
                    defaultValue={today}
                    // helperText="Some important text"
                    variant="filled"
                    type="date"
                />
                <TextField
                    id="filled-helperText"
                    label="Check-Out"
                    defaultValue={today}
                    // helperText="Some important text"
                    variant="filled"
                    type="date"
                />
            </Container>
            <Container>
                {renderFilteredHotel.map((hotel, index) => (
                <Hotel key={index} hotelName={hotel.name} 
                hotelImage={hotelImages[index % 4].hotelImage}
                hotelAddress={hotel.address}
                hotelRating={hotel.rating}
                hotelNearByPlaces={hotel.near}
                hotelDescription={hotel.description}
                hotelCity={hotel.city}
                hotelId={hotel.id}/>
                ))}
            </Container>
        </>
    )
}
export {Destination}