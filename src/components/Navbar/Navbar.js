import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';






const SignInNavbar = () => {
    const currentUser = useSelector(state => state.currentUser)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const logOutTask = ()=>{
        navigate("/")
        dispatch(allActions.userActions.logOut())
    }

    return(
        <Navbar collapseOnSelect expand="lg" className='navbar-transparent' >
            <Container>
                <Navbar.Brand></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end"> 
                    <Nav>
                        <Nav.Link href="#features">Currency</Nav.Link>
                        <Nav.Link href="#pricing">Language</Nav.Link>
                        <Link className='nav-link' to="addproperty">List Your Property</Link>
                        <Link className='nav-link' to="register">Register</Link>
                        {
                            currentUser.loggedIn?
                            <Link className='nav-link' onClick={logOutTask}>Log Out</Link>
                            :
                            <Link className='nav-link' to="signin">Log In</Link>
                        }
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export {SignInNavbar};