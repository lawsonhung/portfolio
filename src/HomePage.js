// Components
import React, { Component } from 'react';
import MyNavbar from './MyNavbar';
import Introduction from './Introduction';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Credits from './Credits';

import './css/index.css';


class HomePage extends Component {

  handleClick = (url) => {
    let win = window.open(url, '_blank');
    win.focus();
  }

  render () {
    return (
      <div>

        <MyNavbar/>
        <Introduction />
        <AboutMe />
        <Skills />
        <Projects handleClick={this.handleClick}/>
        <Contact />
        <Credits/>

      </div>
    )
  }
}

export default HomePage;