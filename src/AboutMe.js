import React, { Component } from 'react';
import './css/AboutMe.css';

class AboutMe extends Component {

  render() {
    return (
      <div className='about' id='about'>
        <div className='divider'>&nbsp;</div>
        <div>

          <p className='aboutText'>
            Hi! I'm a full stack software engineer who enjoys the winter months. Proficient in Ruby on Rails, JavaScript and React, I have a background in entrepreneurship, education and healthcare which allows me to make a valuable impact upon any business I am a part of. Outside of code, I am a New Yorker, exercise enthusiast, board game hobbyist and volunteer.
          </p>
        </div>
      </div>
    )
  }

}

export default AboutMe