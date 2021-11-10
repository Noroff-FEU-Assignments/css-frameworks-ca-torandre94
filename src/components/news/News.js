import React from 'react'
import "../../sass/style.scss"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import news1 from "../../images/news/news-1.jpeg"
import news2 from "../../images/news/news-2.jpeg"
import news3 from "../../images/news/news-3.jpeg"
import news4 from "../../images/news/news-4.jpeg"
import news5 from "../../images/news/news-5.jpeg"
import news6 from "../../images/news/news-6.jpeg"
import news7 from "../../images/news/news-7.jpeg"
import news8 from "../../images/news/news-8.jpeg"

function News() {
    return (
        <>

            <Container>

                <h1>News</h1>
                
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary">1</Button>
                    <Button variant="secondary">2</Button>
                    <Button variant="secondary">3</Button>
                    <Button variant="secondary">4</Button>
                </ButtonGroup>

                <Row>
                    <Col md={3}>
                        <Card style={{ maxWidth: '18rem' }}>
                            <Card.Img variant="top" src={news1} />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Card.Text>
                                Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                                <Button variant="primary">MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ maxWidth: '18rem' }}>
                            <Card.Img variant="top" src={news2} />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Card.Text>
                                Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                                <Button variant="primary">MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ maxWidth: '18rem' }}>
                            <Card.Img variant="top" src={news3} />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Card.Text>
                                Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                                <Button variant="primary">MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ maxWidth: '18rem' }}>
                            <Card.Img variant="top" src={news4} />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Card.Text>
                                Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                                <Button variant="primary">MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <Card style={{ maxWidth: '18rem' }}>
                            <Card.Img variant="top" src={news5} />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Card.Text>
                                Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                                <Button variant="primary">MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ maxWidth: '18rem' }}>
                            <Card.Img variant="top" src={news6} />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Card.Text>
                                Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                                <Button variant="primary">MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ maxWidth: '18rem' }}>
                            <Card.Img variant="top" src={news7} />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Card.Text>
                                Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                                <Button variant="primary">MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ maxWidth: '18rem' }}>
                            <Card.Img variant="top" src={news8} />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Card.Text>
                                Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                                <Button variant="primary">MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary">1</Button>
                    <Button variant="secondary">2</Button>
                    <Button variant="secondary">3</Button>
                    <Button variant="secondary">4</Button>
                </ButtonGroup>

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

export default News
