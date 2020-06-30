import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/Projects.css';

class Projects extends Component {

  render() {
    return (
      <div>
        <div className='projects-divider'>&nbsp;</div>

        <div className='projects'>
          <Container>
            <Row>
              <Col>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/vMZTea1-GBA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Col>

              <Col>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/fzxA1PBSZeU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Col>
            </Row>

            <Row>
              <Col>
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