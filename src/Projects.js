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

                <br/>

                <a href='https://github.com/lawsonhung/delightful-texts-frontend' target='_blank' rel='noopener noreferrer'>Frontend</a>
                <span>&nbsp;|&nbsp;</span>
                <a href='https://github.com/lawsonhung/Delightful-Texts-Backend' target='_blank' rel='noopener noreferrer'>Backend</a>

              </Col>

              <Col>

                <h1>Let's Chat</h1>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/fzxA1PBSZeU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                <br/>

                <a href='https://github.com/lawsonhung/ChatApp-FrontEnd' target='_blank' rel='noopener noreferrer'>Frontend</a>
                <span>&nbsp;|&nbsp;</span>
                <a href='https://github.com/lawsonhung/ChatApp-BackEnd' target='_blank' rel='noopener noreferrer'>Backend</a>
                <span>&nbsp;|&nbsp;</span>
                <a href='http://angry-cabbage.surge.sh/' target='_blank' rel='noopener noreferrer'>Project</a>

              </Col>
            </Row>

            <Row>
              <Col>

                <h1>Java</h1>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/Rz_69f4Z_4w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <br/>

                <a href='https://github.com/aleksandra1995/coffee-review-app/tree/master/coffee-review-front-end' target='_blank' rel='noopener noreferrer'>Frontend</a>
                <span>&nbsp;|&nbsp;</span>
                <a href='https://github.com/aleksandra1995/coffee-review-app/tree/master/coffee-reviews-backend/mod-3-project-coffee-reviews' target='_blank' rel='noopener noreferrer'>Backend</a>
              </Col>
            </Row>
          </Container>
        </div>

      </div>
    )
  }

}

export default Projects