import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./FirebaseConfig";


const GetBooking = () =>{
    const [allBookings, setAllBookings] = useState([]);

    useEffect(()=>{
        // useEffect returns a function so we cant make it async. async function returns a promise.
        const getBookingDetails = async ()=>{
            const bookingDetails = await getDocs(collection(db, 'booking'));
            const tempBookingArray = bookingDetails.docs.map((single)=>
            ({...single.data(), id: single.id}));
            setAllBookings(tempBookingArray);
        }
        getBookingDetails()
    },[])
    
    return(allBookings);
}

export {GetBooking};