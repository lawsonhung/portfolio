import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ReactLogo from './assets/React.png';
import './css/Skills.css';

class Skills extends Component {

  render() {
    return (
      <div className='skills'>
        <Row>
          <Col><img src={ReactLogo} alt='React' /></Col>
        </Row>
        <Row>
          <Col>React</Col>
          <Col>Redux</Col>
          <Col>Javascript</Col>
        </Row>
        Ruby on Rails
        HTML5
        CSS
        PostgresQL
      </div>
    )
  }

}

export default Skills