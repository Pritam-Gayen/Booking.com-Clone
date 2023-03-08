import React from "react"
import './Stays.css'
import { Card, Carousel, Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Hotels } from "../Hotel/Hotel";
import { Link } from "react-router-dom";
import carouselImage1 from "./Carousal-Images/house-pond.jpg"
import carouselImage2 from "./Carousal-Images/houses.jpg"
import carouselImage3 from "./Carousal-Images/waterfall.jpg"

import cardImageAsia1 from "./Card-Images/Asia-Images/bali-bnr.webp"
import cardImageAsia2 from "./Card-Images/Asia-Images/bhutan-temple.jpg"
import cardImageAsia3 from "./Card-Images/Asia-Images/cambodia-temple.jpg"
import cardImageAsia4 from "./Card-Images/Asia-Images/kothan-darama-swamy-temple.webp"
import cardImageAsia5 from "./Card-Images/Asia-Images/rameshwaram-temple.jpg"
import cardImageAsia6 from "./Card-Images/Asia-Images/tajmahal.jpeg"

import cardImageEurope1 from "./Card-Images/Europe-Images/hill-station.jpg"
import cardImageEurope2 from "./Card-Images/Europe-Images/hillside-fort.jpg"
import cardImageEurope3 from "./Card-Images/Europe-Images/ifeltower.jpg"
import cardImageEurope4 from "./Card-Images/Europe-Images/narrow-road.jpg"
import cardImageEurope5 from "./Card-Images/Europe-Images/sea-side.jpg"
import cardImageEurope6 from "./Card-Images/Europe-Images/venis.jpg"

const Stays = () =>{
    const cityName = "mumbai";
    
    return(
    <>
        <Carousel variant="dark">
            <Carousel.Item>
                <img style={{ height: '500px' }}
                className="d-block w-100"
                src={carouselImage1}
                alt="first slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img style={{ height: '500px' }}
                className="d-block w-100"
                src={carouselImage2}
                alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img style={{ height: '500px' }}
                className="d-block w-100"
                src={carouselImage3}
                alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <Container>
            <Row>
                <Col><h3>Europe</h3></Col>
            </Row>
        </Container>
            
        <Carousel>
            <Carousel.Item>
                <Container style={{display: 'flex'}}>
                <Card className="bg-dark text-white" style={{ margin:'10px',height:'200px', width:'500px'}}>
                    <Card.Img className="d-block" style={{height: '200px'}} src={cardImageEurope1} alt="Card image" />
                    <Card.ImgOverlay >
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white" style={{ margin:'10px', height:'200px', width:'500px'}}>
                    <Card.Img  className="d-block" style={{height: '200px'}} src={cardImageEurope2} alt="Card image" />
                    <Card.ImgOverlay >
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container style={{display: 'flex'}}>
                <Card className="bg-dark text-white" style={{ margin:'10px',height:'200px', width:'500px'}}>
                    <Card.Img className="d-block" style={{height: '200px'}} src={cardImageEurope3} alt="Card image" />
                    <Card.ImgOverlay >
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white" style={{ margin:'10px', height:'200px', width:'500px'}}>
                    <Card.Img  className="d-block" style={{height: '200px'}} src={cardImageEurope4} alt="Card image" />
                    <Card.ImgOverlay >
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                </Container>
            </Carousel.Item>
            
            <Carousel.Item>
            <Container style={{display: 'flex'}}>
            <Card className="bg-dark text-white" style={{ margin:'10px',height:'200px', width:'500px'}}>
                    <Card.Img className="d-block" style={{height: '200px'}} src={cardImageEurope5} alt="Card image" />
                    <Card.ImgOverlay >
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white" style={{ margin:'10px', height:'200px', width:'500px'}}>
                    <Card.Img  className="d-block" style={{height: '200px'}} src={cardImageEurope6} alt="Card image" />
                    <Card.ImgOverlay >
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                </Container>
            </Carousel.Item>
        </Carousel>
            
        <Container>
            <Row>
                <Col><h3>Asia</h3></Col>
            </Row>
        </Container>
            
        <Carousel>
            <Carousel.Item>
                <Container style={{display: 'flex'}}>
                <Card className="bg-dark text-white" style={{ margin:'10px',height:'200px', width:'500px'}}>
                    <Card.Img className="d-block" style={{height: '200px'}} src={cardImageAsia1} alt="Card image" />
                    <Card.ImgOverlay >
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white" style={{ margin:'10px', height:'200px', width:'500px'}}>
                    <Card.Img  className="d-block" style={{height: '200px'}} src={cardImageAsia2} alt="Card image" />
                    <Card.ImgOverlay >
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container style={{display: 'flex'}}>
                <Card className="bg-dark text-white" style={{ margin:'10px',height:'200px', width:'500px'}}>
                    <Card.Img className="d-block" style={{height: '200px'}} src={cardImageAsia3} alt="Card image" />
                    <Card.ImgOverlay >
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white" style={{ margin:'10px', height:'200px', width:'500px'}}>
                    <Card.Img  className="d-block" style={{height: '200px'}} src={cardImageAsia4} alt="Card image" />
                    <Card.ImgOverlay >
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                </Container>
            </Carousel.Item>
            
            <Carousel.Item>
                <Container style={{display: 'flex'}}>
                    <Card className="bg-dark text-white" style={{ margin:'10px',height:'200px', width:'500px'}}>
                        <Card.Img className="d-block" style={{height: '200px'}} src={cardImageAsia5} alt="Card image" />
                        <Card.ImgOverlay >
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    
                    
                    <Card className="bg-dark text-white"  style={{ margin:'10px', height:'200px', width:'500px'}}>
                        <Card.Img  className="d-block" style={{height: '200px'}} src={cardImageAsia6} alt="Card image" />
                        <Card.ImgOverlay >
                            <Link to="city" style={{textDecoration: 'none', textDecorationColor: 'ButtonHighlight'}}>
                                <Card.Title>India</Card.Title>
                            </Link>
                            <Card.Text style={{fontSize:'medium'}}>See the vibe of Mughal Empire</Card.Text>
                            <Card.Text style={{fontSize:'medium'}}>Tajmahal, Agra Fort, Red Fort</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    
                </Container>
            </Carousel.Item>
        </Carousel>
    </>
    )
}

export default Stays