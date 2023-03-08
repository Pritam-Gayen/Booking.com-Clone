import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function FlightBookingCard(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Airline: {props.airlineName}
        </Typography>
        <Typography variant="h5" component="div">
          From: {props.from}  To: {props.to}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Price: {props.price}
        </Typography>
        <Typography variant="body2">
          Duration: {props.duration}
          <br />
          Via: {props.via}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Cancel</Button>
      </CardActions>
    </Card>
  );
}

export {FlightBookingCard}