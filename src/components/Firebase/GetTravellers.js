import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./FirebaseConfig";

const GetTravellers = ()=>{
    const [traveller, setTraveller] = useState([]);

    useEffect(()=>{
        const getTravellersEmail = async()=>{
            const travellerDetails = await getDocs(collection(db, 'traveller'));
            const temptravellerDetailsArray = travellerDetails.docs.map((singleAccount)=>
            ({...singleAccount.data(), id: singleAccount.id}));
            setTraveller(temptravellerDetailsArray);
        }
        getTravellersEmail();
    }, []);
    
    return (traveller);
}

export {GetTravellers};