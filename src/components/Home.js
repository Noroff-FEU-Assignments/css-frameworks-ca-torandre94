import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { FormControl } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ContactForm from './ContactForm';
import ContentTabs from './ContentTabs';

function Home() {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                </Container>
            </Navbar>

            <Container class="background" style={{ backgroundImage: "url(images/premier-league.jpg)" }}>
            <div class="p-5 mb-4 bg-light rounded-3">
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">Premier League Betting Tips</h1>
                    <p class="col-md-8 fs-4 heading-p">Using a series of utilities, you can create this jumbotron, just like the one in
                        previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to
                        your liking.</p>
                </div>
            </div>
            </Container>

            <Container>
                <h2>Read the latest match news!</h2>
                <p>Aliqua magna nulla elit dolore tempor aliqua ex ipsum cupidatat laboris aute. Sit magna cupidatat veniam ut mollit consectetur veniam exercitation ex irure sunt duis consectetur dolore. Velit ea voluptate cillum magna ad adipisicing labore ut irure veniam dolor ullamco enim. In mollit est cillum irure velit adipisicing minim dolore dolor. Labore dolor ex adipisicing officia elit commodo dolor elit est. Sint et fugiat reprehenderit duis eu exercitation ut. Sunt anim elit sunt eiusmod proident fugiat qui voluptate.
                </p>

                <h3>Send us your tips</h3>
            </Container>

            <Container>
                <Row>
                    <Col md={6}>
                        <ContactForm />
                    </Col>
                    <Col md={6}>
                        <ContentTabs />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home
