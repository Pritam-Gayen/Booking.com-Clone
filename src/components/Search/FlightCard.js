import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../Firebase/FirebaseConfig';
import { useNavigate } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const FlightCard = (props) =>{
  const currentUser = useSelector(state => state.currentUser);
  const navigate = useNavigate();
  const flightBookingTask = async() =>{
    if(currentUser.loggedIn){
      const docRef = await addDoc(collection(db, "flightbooking"), 
      {userid: currentUser.user.id, airlinename: props.airlineName, from: props.from, to: props.to,
         price: props.price, via: props.via, duration: props.duration, 
      });
      
      navigate("/userprofile");
    }
    else{
      alert("Please Log In first")
    }
  }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Airline: {props.airlineName}
        </Typography>
        <Typography variant="h5" component="div">
          {bull}{props.from}{bull}to{bull}{props.to}{bull}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Price: {props.price}
        </Typography>
        <Typography variant="body2">
          {/* {props.departure} */}
          <br />
          {/* {props.return} */}
        </Typography>
        <Typography>
            Via: {props.via}
        </Typography>
        <Typography>
            Flight duration: {props.duration}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={flightBookingTask}>Book</Button>
      </CardActions>
    </Card>
  );
}

export {FlightCard}