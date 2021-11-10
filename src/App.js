import React from "react";
import "./sass/style.scss"
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Home from './components/home/Home'
import News from './components/news/News'
import Contact from './components/contact/Contact'

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" expand="lg">
          <Container>
              <Navbar.Brand variant="navBar-brand" href="#home">The YAY Company</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  <NavLink exact to="/" className="nav-link">Home</NavLink>
                  <NavLink to="/news" className="nav-link">News</NavLink>
                  <NavLink to="/contact" className="nav-link">Contact</NavLink>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Go</Button>
              </Form>
              </Navbar.Collapse>
          </Container>
        </Navbar>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
