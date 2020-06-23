import React, { Component } from 'react';

// React Bootstrap imports
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// eslint-disable-next-line
import FormControl from 'react-bootstrap/FormControl';
// eslint-disable-next-line
import Form from 'react-bootstrap/Form';

// Custom CSS
import './Navbar.css';

class MyNavbar extends Component {

  scrollTo = (elementId) => {
    document.getElementById(elementId).scrollIntoView();
  }

  render() {
    return (
      <div>
        <Navbar id='navbar-header' variant='dark' expand='lg'>
          <Navbar.Brand href='#home'>LAWSON HUNG</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='#home' onSelect={() => this.scrollTo('home')}>Home</Nav.Link>
              <Nav.Link href='#about' onSelect={() => this.scrollTo('about')}>About</Nav.Link>
              <Nav.Link href='#skills' onSelect={() => this.scrollTo('skills')}>Skills</Nav.Link>
              {/* <Form inline>
                <FormControl type='text' placeholder='Search' className='mr-sm-2'/>
                <Button variant='outline-success'>Search</Button>
              </Form> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }

}

export default MyNavbar