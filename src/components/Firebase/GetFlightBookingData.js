import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./FirebaseConfig";


const GetFlightBookingData = () =>{
    const [allFlightBookings, setAllFlightBookings] = useState([]);

    useEffect(()=>{
        // useEffect returns a function so we cant make it async. async function returns a promise.
        const getFlightBookingDetails = async ()=>{
            const bookingDetails = await getDocs(collection(db, 'flightbooking'));
            const tempBookingArray = bookingDetails.docs.map((single)=>
            ({...single.data(), id: single.id}));
            setAllFlightBookings(tempBookingArray);
        }
        getFlightBookingDetails()
    },[])
    
    return(allFlightBookings);
}

export {GetFlightBookingData};