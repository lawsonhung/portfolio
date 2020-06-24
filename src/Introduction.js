import React, { Component } from 'react';

// React Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// Custom CSS
import './css/Introduction.css';

// Profile Picture
import ProfilePic from './assets/Social Media Profile Pic.jpg';

class About extends Component {

  render() {
    return (
      <div className='intro' id='home'>
        <Row className='justify-content-md-center'>
          <Col xs={12} sm={4} md={4}>
            <h1 className='name'>LAWSON HUNG</h1>
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col xs={12} sm={4} md={4}>
            <Image className='profile-pic' src={ProfilePic} roundedCircle />
          </Col>
        </Row>
      </div>
    )
  }

}

export default About