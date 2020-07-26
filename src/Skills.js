import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Credits: https://www.hiclipart.com
import ReactLogo from './assets/React.png';
import ReduxLogo from './assets/Redux.png';
import JavaScriptLogo from './assets/JavaScript.png';
import RailsLogo from './assets/Ruby on Rails.png';
import HTMLLogo from './assets/HTML5.png';
import CSSLogo from './assets/CSS3.png';
import PostgreSQLLogo from './assets/PostgreSQL.png';
import './css/Skills.css';

class Skills extends Component {

  render() {
    return (
      <div id='skills'>
        <div className='skills-divider'>&nbsp;</div>

        <div className='skills skills-grid-wrapper'>
          {/* <Container className='row1'>
            <Row>

              <Col className='flip-card'>
                <div className='flip-card-inner'>
                  <img src={ReactLogo} className='logo' alt='React' />
                </div>
              </Col>
              
              <Col className='flip-card'>
                <div className='flip-card-inner'>
                  <img src={ReduxLogo} className='logo' alt='Redux'/>
                </div>
              </Col>

              <Col className='flip-card'>
                <div className='row1col3'>
                  <img src={JavaScriptLogo} className='logo' alt='JavaScript'/>
                </div>
              </Col>
            </Row>

            <Row className='language'>
              <Col><p>React</p></Col>
              <Col><p>Redux</p></Col>
              <Col><p>JavaScript</p></Col>
            </Row>

          </Container>

          <Container>
            <Row>
              
              <Col className='flip-card'>
                <div className='row2'>
                  <img src={RailsLogo} className='logo' alt='Ruby on Rails'/>
                </div>
              </Col>

              <Col className='flip-card'>
                <div className='row2'>
                  <img src={HTMLLogo} className='logo' alt='HTML5'/>
                </div>
              </Col>

              <Col className='flip-card'>
                <div className='row2'>
                  <img src={CSSLogo} className='logo' alt='CSS3'/>
                </div>
              </Col>
              
              <Col className='flip-card'>
                <div className='row2'>
                  <img src={PostgreSQLLogo} className='logo' alt='PostgreSQL'/>
                </div>
              </Col>
            </Row>

            <Row className='language'>
              <Col><p>Ruby on Rails</p></Col>
              <Col><p>HTML5</p></Col>
              <Col><p>CSS3</p></Col>
              <Col><p>PostgreSQL</p></Col>
            </Row>
          </Container> */}

          <div className='flip-card'>
              <img src={ReactLogo} className='logo flip-card-inner' alt='React' />
              <p>React</p>
          </div>

          <div className='flip-card'>
              <img src={ReduxLogo} className='logo flip-card-inner' alt='Redux' />
              <p>Redux</p>
          </div>

          <div className='flip-card'>
              <img src={JavaScriptLogo} className='logo flip-card-inner' alt='JavaScript' />
              <p>JavaScript</p>
          </div>

          <div className='flip-card'>
              <img src={RailsLogo} className='logo flip-card-inner' alt='Rails' />
              <p>Rails</p>
          </div>

          <div className='flip-card'>
              <img src={HTMLLogo} className='logo flip-card-inner' alt='HTML' />
              <p>HTML</p>
          </div>

          <div className='flip-card'>
              <img src={CSSLogo} className='logo flip-card-inner' alt='CSS' />
              <p>CSS</p>
          </div>

          <div className='flip-card'>
              <img src={PostgreSQLLogo} className='logo flip-card-inner' alt='PostgreSQL' />
              <p>PostgreSQL</p>
          </div>
        {/* End .skills, .skills-grid-wrapper */}
        </div>
      </div>
    )
  }

}

export default Skills