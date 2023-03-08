import React from "react";
import { Outlet, Link } from "react-router-dom";
import BookingBar from "../Bookingbar/BookingBar";
import Footer from "../Footer/Footer";
import StaticExample from "../Modals/LogInLogOut";
import {SignInNavbar} from "../Navbar/Navbar";
import "./Layout.css";
const Layout = () => {
  
  return (
    <>
      <div className="background">
      <SignInNavbar/>
      <BookingBar/>
      <Outlet/>
      <Footer/>
      </div>
    </>
  )
};

export default Layout;