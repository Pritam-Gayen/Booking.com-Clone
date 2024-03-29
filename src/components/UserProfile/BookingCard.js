import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function BookingCard({bill, checkIn, checkOut, hotelName}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Hotel: {hotelName}
        </Typography>
        <Typography variant="h5" component="div">
          Check In{bull}{checkIn}{bull}{checkOut}{bull}Check Out
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Bill paid: {bill}
        </Typography>
        <Typography variant="body2">
          {/* well meaning and kindly. */}
          <br />
          {/* {'"a benevolent smile"'} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Cancel</Button>
      </CardActions>
    </Card>
  );
}

export {BookingCard}