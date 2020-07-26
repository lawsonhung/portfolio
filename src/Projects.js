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

          <div className='grid-wrapper'>

            <div className='card'>
              <h1>Delightful Texts</h1>

              <iframe title='Delightful Texts' height="315" src="https://www.youtube.com/embed/vMZTea1-GBA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              <span className='project-links'>
                <a href='https://github.com/lawsonhung/delightful-texts-frontend' target='_blank' rel='noopener noreferrer'>Frontend</a>
                <span>&nbsp;|&nbsp;</span>
                <a href='https://github.com/lawsonhung/Delightful-Texts-Backend' target='_blank' rel='noopener noreferrer'>Backend</a>
                <span>&nbsp;|&nbsp;</span>
                <a href='http://delightful-texts.surge.sh/registration' target='_blank' rel='noopener noreferrer'>Project</a>
              </span>
            </div>

            <div className='card'>

              <h1>Let's Chat</h1>

              <iframe title="Let's Chat" height="315" src="https://www.youtube.com/embed/fzxA1PBSZeU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              <span className='project-links'>
                <a href='https://github.com/lawsonhung/ChatApp-FrontEnd' target='_blank' rel='noopener noreferrer'>Frontend</a>
                <span>&nbsp;|&nbsp;</span>
                <a href='https://github.com/lawsonhung/ChatApp-BackEnd' target='_blank' rel='noopener noreferrer'>Backend</a>
                <span>&nbsp;|&nbsp;</span>
                <a href='http://angry-cabbage.surge.sh/' target='_blank' rel='noopener noreferrer'>Project</a>
              </span>
            </div>

            <div className='card'>

              <h1>Java</h1>

              <iframe title='Java' height="315" src="https://www.youtube.com/embed/Rz_69f4Z_4w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              <span className='project-links'>
                <a href='https://github.com/aleksandra1995/coffee-review-app/tree/master/coffee-review-front-end' target='_blank' rel='noopener noreferrer'>Frontend</a>
                <span>&nbsp;|&nbsp;</span>
                <a href='https://github.com/aleksandra1995/coffee-review-app/tree/master/coffee-reviews-backend/mod-3-project-coffee-reviews' target='_blank' rel='noopener noreferrer'>Backend</a>
              </span>
            </div>

          {/* End .grid-wrapper */}
          </div>
        {/* End .projects */}
        </div>

      {/* End #projects */}
      </div>
    )
  }

}

export default Projects