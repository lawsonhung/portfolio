import React, { Component } from 'react';

// React Bootstrap imports
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// Custom CSS
// Credits: https://www.hiclipart.com/free-transparent-background-png-clipart-zbinx
import LinkedInLogo from './assets/LinkedIn.png';
import GitHubLogo from './assets/GitHub.png';
import MediumLogo from './assets/Medium.png';
import './MyNavbar.css';

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
              <Nav.Link href='#projects' onSelect={() => this.scrollTo('projects')}>Projects</Nav.Link>
              <Nav.Link href='#contact' onSelect={() => this.scrollTo('contact')}>Contact</Nav.Link>
            </Nav>

            <Nav className='justify-content-end'>
              <Nav.Link href='https://linkedin.com/in/lawsonhung' target='_blank'>
                <img src={LinkedInLogo}  className='navbar-logo' alt='LinkedIn'/>
              </Nav.Link>

              <Nav.Link href='https://github.com/lawsonhung' target='_blank'>
                <img src={GitHubLogo} className='navbar-logo' alt='GitHub'/>
              </Nav.Link>

              <Nav.Link href='https://medium.com/@lawsonhung' target='_blank'> 
                <img src={MediumLogo} className='navbar-logo' alt='Medium'/>
              </Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }

}

export default MyNavbar