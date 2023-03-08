import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./FirebaseConfig";

const GetHotelRooms = () =>{
    const [rooms, setRooms] = useState([]);

    useEffect(()=>{
        // useEffect returns a function so we cant make it async. async function returns a promise.
        const getRooms = async ()=>{
            const hotelRooms = await getDocs(collection(db, 'rooms'));
            const tempRoomArray = hotelRooms.docs.map((room)=>
            ({...room.data(), id: room.id}));

            setRooms(tempRoomArray);
        }
        getRooms();
        
    },[])
    
    return(rooms);
}

export {GetHotelRooms};