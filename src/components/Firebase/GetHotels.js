import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./FirebaseConfig";


const GetHotels = () =>{
    const [hotels, setHotels] = useState([]);

    useEffect(()=>{
        // useEffect returns a function so we cant make it async. async function returns a promise.
        const getHotelCards = async ()=>{
            const hotelDetails = await getDocs(collection(db, 'hotels'));
            const tempHotelArray = hotelDetails.docs.map((singleHotel)=>
            ({...singleHotel.data(), id: singleHotel.id}));
            setHotels(tempHotelArray);
        }
        getHotelCards()
    },[])
    
    return(hotels);
}

export {GetHotels};