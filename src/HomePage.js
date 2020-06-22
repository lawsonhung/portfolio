// Components
import React, { Component } from 'react';
import MyNavbar from './MyNavbar';
import About from './About';

// React Bootstrap imports
import Button from 'react-bootstrap/Button';
// import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import './Navbar.css';
import './css/index.css';


class HomePage extends Component {

  render () {
    return (
      <div>

        <MyNavbar />
        <About />

        This be the HomePage, lads.
        <Button>This button does nothing right now.</Button>

      </div>
    )
  }
}

export default HomePage;