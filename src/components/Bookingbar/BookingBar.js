import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AnimateB from './AnimateB';
import { useSelector } from 'react-redux';
// import './BookingBar.css';

const BookingBar = () => {
    const currentUser = useSelector(state => state.currentUser)
    const logInAlert = () =>{
        alert("Please Log In")
    }
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand> <AnimateB/>ooking<span style={{color:'red'}}>.com</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav >
                        <Link className='nav-link' to="destination">Search destination</Link>
                        <Link className='nav-link' to="/">Stays</Link>
                        <Link className='nav-link' to="flights">Flights</Link>
                        {
                            currentUser.loggedIn?
                            <Link className='nav-link' to="userprofile">{currentUser.user.firstname}</Link>
                            :
                            <Link className='nav-link' onClick={logInAlert}>User Profile</Link>
                        }
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default BookingBar