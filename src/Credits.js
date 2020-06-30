import React, { Component } from 'react';
import './css/Credits.css';

class Credits extends Component {

  render() {
    return (
      <div className='credits'>
        <span> Creative Flatlay Photo by <a href="https://unsplash.com/@andyoneru?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Andyone on Unsplash</a></span>
        &nbsp;|&nbsp;
        <span>Snow Forest Photo by <a href="https://unsplash.com/@anniespratt?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Annie Spratt on Unsplash</a></span>
        &nbsp;|&nbsp;
        <span>Cafe Photo by&nbsp;
          <a href="https://unsplash.com/@daanelise?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">daan evers on Unsplash</a>
          </span>
        &nbsp;|&nbsp;
        Projects background coming soon!
        &nbsp;|&nbsp;
        <span>Logos from <a href='https://www.hiclipart.com/'>hiclipart.com</a></span>
        <br/>
        <span>&copy; Lawson Hung | 2020</span>
      </div>
    )
  }

}

export default Credits