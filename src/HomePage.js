import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import './Navbar.css';

class HomePage extends Component {

  render () {
    return (
      <div>
        <Navbar id='navbar-header' variant='dark' expand='lg'>
          <Navbar.Brand href='#home'>LAWSON HUNG</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link>Test Link Here</Nav.Link>
              {/* <Form inline>
                <FormControl type='text' placeholder='Search' className='mr-sm-2'/>
                <Button variant='outline-success'>Search</Button>
              </Form> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        This be the HomePage, lads.

        <Button>Click me! Click me!</Button>
      </div>
    )
  }
}

export default HomePage;