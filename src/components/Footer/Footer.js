import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Footer = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='justify-content-center'>
            <Container className='flex-column'>
                <Button variant="outline-primary">List Your Property</Button>{' '}
                <Nav>
                    <Nav.Link href="#features">Terms & Conditions</Nav.Link>
                    <Nav.Link href="#pricing">How We Work</Nav.Link>
                    <Nav.Link href="#pricing">Privacy & Cookies</Nav.Link>
                    <Nav.Link  href="#pricing">MSA Statement</Nav.Link>
                    <Nav.Link  href="#pricing">About Booking.com</Nav.Link>
                </Nav>
                <p className='text-white'>Copyright © 1996–2023 Booking.com™. All rights reserved.</p>
                <p className='text-white'>Your reference ID is: 347DCE2</p>
                <Nav>
                    <Nav.Link  href="#pricing">Sitemap</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Footer