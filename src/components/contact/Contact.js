import React from 'react'
import "../../sass/style.scss"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function Contact() {
    return (
        <>

            <Container>

                <h1>Submit your details</h1>

                <Row>
                    <Col md={6}>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Website</Form.Label>
                            <Form.Control type="email"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Col>
                    <Col md={6}>
                        <div>
                            <i class="fas fa-envelope"></i>
                            <a className="col-md-4 mt-3" href="mailto:hello@yay.com">hello@yay.com</a>
                        </div>
                        <div>
                            <i class="fas fa-phone"></i>
                            <a href="tel:123-456-7890">123 456 7890</a>
                        </div>
                        <div>
                            <i class="fas fa-map-marker-alt"></i>
                            <p>123 Some Street</p>
                            <p>Somewhere</p>
                            <p>Some City</p>
                            <p>10000</p>
                        </div>
                    </Col>
                </Row>
            </Container>

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

export default Contact
