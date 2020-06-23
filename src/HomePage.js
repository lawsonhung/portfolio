// Components
import React, { Component } from 'react';
import MyNavbar from './MyNavbar';
import Introduction from './Introduction';
import About from './About';
import Skills from './Skills';
import Credits from './Credits';

// React Bootstrap imports
import Button from 'react-bootstrap/Button';
import './Navbar.css';
import './css/index.css';


class HomePage extends Component {

  render () {
    return (
      <div>

        <MyNavbar />
        <Introduction />
        <About />
        <Skills />

        Hi there! Homepage here!
        <Button>This button does nothing right now.</Button>
        <Credits />

      </div>
    )
  }
}

export default HomePage;