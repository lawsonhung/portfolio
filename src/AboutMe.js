import React, { Component } from 'react';
import './css/AboutMe.css';

class AboutMe extends Component {

  render() {
    return (
      <div className='about' id='about'>
        <div className='divider'>&nbsp;</div>

        <div>
          <p className='aboutText'>
            Hello! I am a full stack software engineer living in New York who enjoys the winter months. I am proficient in Ruby on Rails, JavaScript, and React. With a background in entrepreneurship, education, and healthcare, I have a wide variety of skills that are beneficial to any company. Besides being a coder, I am an excercise enthusiast, board game hobbyist, and community volunteer.

          </p>
        </div>

      </div>
    )
  }

}

export default AboutMe