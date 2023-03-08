import React, { useEffect, useState } from "react"
import "./HotelDetails.css"
import { TbParking } from 'react-icons/tb'
import { IoFastFoodOutline } from 'react-icons/io5'
import { MdOutlineRoomService } from 'react-icons/md'
import { TbSmokingNo } from 'react-icons/tb'
import { Container, Navbar, Nav, Button, Table } from "react-bootstrap"
import { useLocation, useNavigate } from "react-router-dom"
import { GetHotels } from "../Firebase/GetHotels"
import { GetHotelRooms } from "../Firebase/GetHotelRooms"
import { SelectOption } from "./SelectOption"
import { useSelector } from "react-redux"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../Firebase/FirebaseConfig"

import hotelRoomPic1 from "./Hotel-Room-Images/help-desk.jpg"
import hotelRoomPic2 from "./Hotel-Room-Images/kitchen.jpg"
import hotelRoomPic3 from "./Hotel-Room-Images/living-room.jpg"
import hotelRoomPic4 from "./Hotel-Room-Images/queen-size-bed-room.jpg"
import hotelRoomPic5 from "./Hotel-Room-Images/two-single-bed-room.jpg"
import hotelRoomPic6 from "./Hotel-Room-Images/wash-room.jpg"



const HotelData = {
    hotelName: "Bloom Hotel - Bengaluru",
    hotelAddress: "Down Town Park, Sadahalli Gate, Kempegowda Int'l Airport Rd, 562157 Bangalore, India",
    hotelImg: [
        hotelRoomPic1, hotelRoomPic2, hotelRoomPic3, hotelRoomPic4, hotelRoomPic5, hotelRoomPic6, 
    ],
    HotelDescription: "Featuring 3-star accommodation, Bloom Hotel - Bengaluru Airport is located in Bangalore, 29 km from Indian Institute of Science, Bangalore and 29 km from Yeswanthpur Railway Station. Featuring a restaurant, this 3-star hotel has air-conditioned rooms with a private bathroom. The accommodation provides room service and a 24-hour front desk for guests. At the hotel each room is equipped with a desk and a flat-screen TV. A buffet breakfast is available daily at Bloom Hotel - Bengaluru Airport. Bangalore Palace is 29 km from the accommodation, while Indira Gandhi Musical Fountain Park is 29 km away. The nearest airport is Kempegowda International Airport, 1 km from Bloom Hotel - Bengaluru Airport. Couples particularly like the location — they rated it 9.0 for a two-person trip."
}

const HotelDetails = () => {
    const currentUser = useSelector(state => state.currentUser);
    const location = useLocation();
    const { hotelId } = location.state;
    const roomData = GetHotelRooms();
    const roomTypesData = roomData.filter((room) => room.hotelid === hotelId)
    const hotelsDetail = GetHotels();
    var oneHotel = [];
    var roomTypes = [];
    var localPriceArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var localTaxArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const taxRate = 0.12;
    // const today = new Date();
    const navigate = useNavigate();
    const [localPrice, setLocalPrice] = useState(localPriceArray);
    const [totalBill, setTotalBill] = useState(0);
    const [tax, setTax] = useState(localTaxArray);
    const [checkInOutDate, setCheckInOutDate] = useState(["0-0-0", "0-0-0"]);
    const [days, setDays] = useState(0);
    const [finalBill, setFinalBill] = useState(0);
    var valueChange = []

    const calculateDays = () => {
        // console.log("calculate date: " + checkInDate);//
        let inDate = checkInOutDate[0].toString().split("-");
        let inDateObj = new Date(inDate[0], inDate[1] - 1, inDate[2]);// year month date
        let outDate = checkInOutDate[1].toString().split("-");
        let outDateObj = new Date(outDate[0], outDate[1] - 1, outDate[2]);// year month date
        let diffTime = (outDateObj.getTime() - inDateObj.getTime());
        // console.log("diffTime: "+ diffTime);//
        if (diffTime > 0) {
            let diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));
            setDays(diffDays);
        }
        else {
            if (diffTime === 0)
                setDays(1);
            else
                setDays(0);
        }
    }

    hotelsDetail.map((item) => {
        if (item.id === hotelId)
            oneHotel = item;
    })

    roomTypesData.map((item) => {
        roomTypes.push(item);
    })

    useEffect(() => {
        const settingFinalBill = () => {
            setFinalBill(totalBill * days);
        }
        settingFinalBill();
    }, [totalBill, days])

    const bookingDone = async() => {
        if(currentUser.loggedIn){
            const docRef = await addDoc(collection(db, "booking"), 
            {userid: currentUser.user.id, hotelname: oneHotel.name, bill: finalBill, checkin: checkInOutDate[0],
            checkout: checkInOutDate[1], 
            });
            navigate("/userprofile");
        }
        else{
            alert("Please Log In first")
        }
        
    }

    return (
        <>
            <Container>
                <h1>{oneHotel.name}</h1>
                <h6>{oneHotel.address}</h6>
                <Navbar bg="light">
                    <Nav>
                        <Button className="nav-buttons">Info & Price</Button>
                        <Button className="nav-buttons">Facilities</Button>
                        <Button className="nav-buttons">House rules</Button>
                        <Button className="nav-buttons">Reviews</Button>
                    </Nav>
                </Navbar>
                <Container>
                    <img className="display-rooms" src={HotelData.hotelImg[0]} />
                    <img className="display-rooms" src={HotelData.hotelImg[1]} />
                    <img className="display-rooms" src={HotelData.hotelImg[2]} />
                    <img className="display-rooms" src={HotelData.hotelImg[3]} />
                    <img className="display-rooms" src={HotelData.hotelImg[4]} />
                    <img className="display-rooms" src={HotelData.hotelImg[5]} />
                </Container>
                <Container>
                    <p className="hotel-description">{oneHotel.description}</p>
                </Container>
                <Navbar bg="light">
                    <Navbar.Brand style={{ marginLeft: '10px' }}>Most Popular Facilities</Navbar.Brand>
                </Navbar>
                <Navbar>
                    <Nav>
                        <p style={{ marginRight: '10px' }}><TbParking size={30} style={{ color: 'green' }} />Free Parking</p>
                        <p style={{ marginRight: '10px' }}><IoFastFoodOutline size={30} style={{ color: 'green' }} />Restaurant</p>
                        <p style={{ marginRight: '10px' }}><MdOutlineRoomService size={30} style={{ color: 'green' }} />Room Service</p>
                        <p style={{ marginRight: '10px' }}><TbSmokingNo size={30} style={{ color: 'red' }} />No Smoking</p>
                    </Nav>
                </Navbar>
            </Container>
            <Container>
                <Navbar bg="light" >
                    <Navbar.Brand style={{ marginLeft: '10px' }}>Check In date</Navbar.Brand>
                    <input type="date" pattern="dd-mm-yyyy" onChange={(event) => {
                        valueChange = checkInOutDate;
                        valueChange[0] = event.target.value;
                        setCheckInOutDate(valueChange);
                        calculateDays();
                        console.log("[check in change ]check in: " + checkInOutDate[0])
                        console.log("[check in change ]check out: " + checkInOutDate[1])
                    }}>
                    </input>
                </Navbar>
                <br></br>
                <Navbar bg="light" >
                    <Navbar.Brand style={{ marginLeft: '10px' }}>Check Out date</Navbar.Brand>
                    <input type="date" onChange={(event) => {
                        valueChange = checkInOutDate;
                        valueChange[1] = event.target.value;
                        setCheckInOutDate(valueChange);
                        calculateDays();
                        console.log("[check out change ]check in: " + checkInOutDate[0])
                        console.log("[check out change ]check out: " + checkInOutDate[1])
                    }}>
                    </input>
                </Navbar>
                <br></br>
                <Table bordered responsive>
                    <thead>
                        <tr className="table-header-color">
                            <th className="table-text-center">Room type</th>
                            <th className="table-text-center">Select rooms</th>
                            <th className="table-text-center">Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roomTypes.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.type}</td>
                                    <td><p>₹ {item.price} each</p>
                                        <p> + Taxes</p>
                                        <select onChange={(event) => {
                                            localPriceArray = localPrice;
                                            localTaxArray = tax;
                                            localPriceArray[index] = item.price * event.target.value;
                                            localTaxArray[index] = Math.round(item.price * event.target.value * taxRate).toFixed(2);
                                            // console.log("array: " + localPriceArray);
                                            setLocalPrice(localPriceArray);
                                            setTax(localTaxArray);
                                            setTotalBill(Math.round(localPrice.reduce((a, b) => a + b) * (taxRate + 1)).toFixed(2));
                                            // setFinalBill(totalBill * days);
                                            // console.log("localPrice: " + localPrice);
                                        }}
                                        >
                                            <SelectOption size={item.number} />
                                        </select>
                                    </td>
                                    <td style={{ textAlign: 'right' }}>
                                        <p style={{ textAlign: 'right' }}>₹ {localPrice[index]}</p>
                                        + <p style={{ textAlign: 'right' }}>₹ {tax[index]}</p>
                                    </td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td> </td>
                            <td>Bill per day</td>
                            <td style={{ textAlign: 'right' }}>{totalBill}</td>
                        </tr>
                        <tr>
                            <td>{checkInOutDate[0]} to {checkInOutDate[1]} = {days} days</td>
                            <td>Total Bill</td>
                            <td style={{ textAlign: 'right' }}>{finalBill.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
            <Container style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="primary" onClick={bookingDone}
                    style={{ margin: '10px' }}>
                    Book
                </Button>{' '}
            </Container>
        </>

    )

}

export default HotelDetails