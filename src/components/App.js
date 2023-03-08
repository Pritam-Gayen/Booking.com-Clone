import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import NoPage from "./Pages/NoPage";
import Stays from "./Stays/Stays"

import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import { Hotel, Hotels } from "./Hotel/Hotel";
import HotelDetails from "./HotelDetails/HotelDetails";
import { DisplayImage } from "./Firebase/GetHotelCardImages";
import { SignIn } from "./Register/SignIn";
import { Register } from "./Register/Register";
import { UserProfile } from "./UserProfile/UserProfile";
import { AddProperty } from "./AddProperty/AddProperty";
import { Destination } from "./Search/Destination";
import { Flights } from "./Search/Flights";



const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route  index element={<Stays />} />
          <Route path="/" element={<Stays />} />
          <Route path="city" element={<Hotels/>}/>
          <Route path="/hoteldetails" element={<HotelDetails/>}/>
          <Route path="signin" element={<SignIn/>} />
          <Route path="register" element={<Register/>} />
          <Route path="destination" element={<Destination/>} />
          <Route path="flights" element={<Flights/>} />
          <Route path="/userprofile" element={<UserProfile/>} />
          <Route path="addproperty" element={<AddProperty/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
