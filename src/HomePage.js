// Components
import React, { Component } from 'react';
import MyNavbar from './MyNavbar';
import Introduction from './Introduction';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Credits from './Credits';

import './css/index.css';


class HomePage extends Component {

  render () {
    return (
      <div>

        <MyNavbar />
        <Introduction />
        <About />
        <Skills />
        <Contact />
        <Credits />

      </div>
    )
  }
}

export default HomePage;