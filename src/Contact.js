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
          &nbsp;(917)968-2138
        </p>
        <p>
          <a href={'mailto:lhung1@babson.edu'} target='_blank' rel='noopener noreferrer'>
            <img src={EmailIcon} className='icon' alt='Email'/>
          &nbsp;lhung1@babson.edu
          </a>
        </p>
      </div>
    )
  }

}

export default Contact