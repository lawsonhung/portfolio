import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/Projects.css';

class Projects extends Component {

  render() {
    return (
      <div id='projects'>
        <div className='projects-divider'>&nbsp;</div>

        <div className='projects'>
          <Container>
            <Row>
              <Col>
                <h1>Delightful Texts</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/vMZTea1-GBA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <a href='https://github.com/lawsonhung/delightful-texts-frontend'>Frontend</a>
                &nbsp;
                <span>|</span>
                &nbsp;
                <a href='https://github.com/lawsonhung/Delightful-Texts-Backend'>Backend</a>
              </Col>

              <Col>
                <h1>Let's Chat</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/fzxA1PBSZeU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
              </Col>
            </Row>

            <Row>
              <Col>
                <h1>Java</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Rz_69f4Z_4w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Col>
            </Row>
          </Container>
        </div>

      </div>
    )
  }

}

export default Projects