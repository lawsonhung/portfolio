import React, { Component } from 'react';

// Credits: https://www.hiclipart.com
import PhoneIcon from './assets/Phone.png';
import EmailIcon from './assets/Email.png';

import './css/Contact.css';

class Contact extends Component {

  render() {
    return (
      <div className='contact' id='contact'>
        <p>
          <img src={PhoneIcon} className='icon' alt='Phone'/>
          &nbsp;(347)352-1676
        </p>
        <p>
          <a href={'mailto:lhung23567@gmail.com'} target='_blank' rel='noopener noreferrer'>
            <img src={EmailIcon} className='icon' alt='Email'/>
          &nbsp;lhung23567@gmail.com
          </a>
        </p>
      </div>
    )
  }

}

export default Contact