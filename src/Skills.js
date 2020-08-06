import React, { Component } from 'react';

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

          <div className='flip-card'>
              <img src={ReactLogo} className='logo flip-card-inner' alt='React' />
              <p className='language'>React</p>
          </div>

          <div className='flip-card'>
              <img src={ReduxLogo} className='logo flip-card-inner' alt='Redux' />
              <p className='language'>Redux</p>
          </div>

          <div className='flip-card'>
              <img src={JavaScriptLogo} className='logo flip-card-inner' alt='JavaScript' />
              <p className='language'>JavaScript</p>
          </div>

          <div className='flip-card'>
              <img src={RailsLogo} className='logo flip-card-inner' alt='Rails' />
              <p className='language'>Rails</p>
          </div>

          <div className='flip-card'>
              <img src={HTMLLogo} className='logo flip-card-inner' alt='HTML' />
              <p className='language'>HTML5</p>
          </div>

          <div className='flip-card'>
              <img src={CSSLogo} className='logo flip-card-inner' alt='CSS' />
              <p className='language'>CSS3</p>
          </div>

          <div className='flip-card'>
              <img src={PostgreSQLLogo} className='logo flip-card-inner' alt='PostgreSQL' />
              <p className='language'>PostgreSQL</p>
          </div>
        {/* End .skills, .skills-grid-wrapper */}
        </div>
      </div>
    )
  }

}

export default Skills