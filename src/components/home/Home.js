import React from 'react'
import "../../sass/style.scss"
import Carousel from 'react-bootstrap/Carousel'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import carousel1 from '../../images/carousel/carousel-1.jpeg'
import carousel2 from '../../images/carousel/carousel-2.jpeg'
import carousel3 from '../../images/carousel/carousel-3.jpeg'
import tab1 from '../../images/tab/tab-1.jpeg'
import tab2 from '../../images/tab/tab-2.jpeg'
import tab3 from '../../images/tab/tab-3.jpeg'



function Home() {
    return (
        <>
            

            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carousel1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carousel2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carousel3}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <div className="layout">
                <h1>We do YAY things</h1>
                <p>
                Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.
                </p>
            </div>
            <div className="layout">
                <Accordion defaultActiveKey="0" className="d-md-none">
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            First
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                            <img src={tab1}/>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Second
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                            <img src={tab2}/>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Third
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                            <img src={tab3}/>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            
                <div className="d-none d-md-block">
                    <Tabs defaultActiveKey="first" id="uncontrolled-tab-example">
                        <Tab eventKey="first" title="First">
                            <row>
                                <Col><img src={tab1}/></Col>
                                <Col>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </Col>
                            </row>
                        </Tab>
                        <Tab eventKey="second" title="Second">
                                <Col md={2}><img src={tab2}/></Col>
                                <Col md={3}>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </Col>
                        </Tab>
                        <Tab eventKey="third" title="Third">
                                <Col md={2}><img src={tab3}/></Col>
                                <Col md={3}>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </Col>
                        </Tab>
                    </Tabs>
                </div>
            </div>

            <footer className="page-footer font-small blue pt-4">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-4">
                            <a href="#"><i class="fab fa-vimeo-v"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>
                        </div>

                        <a className="col-md-4 mt-3" href="mailto:hello@yay.com">hello@yay.com</a>

                        <p className="col-md-4 mt-3">© 2020 Copyright</p>
                    </div>
                </div>
            </footer>
            
        </>
    ) 
}

export default Home
