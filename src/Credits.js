import React, { Component } from 'react';
import './css/Credits.css';

class Credits extends Component {

  handleClick = (url) => {
    let win = window.open(url, '_blank');
    win.focus();
  }

  render() {
    return (
      <div className='credits'>
        <span> Creative Flatlay Photo by <a href="javascript:void(0)" onClick={() => this.handleClick('https://unsplash.com/@andyoneru?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText')}>Andyone on Unsplash</a></span>
        &nbsp;|&nbsp;
        <span>Snow Forest Photo by <a href="javascript:void(0)" onClick={() => this.handleClick('https://unsplash.com/@anniespratt?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText')}>Annie Spratt on Unsplash</a></span>
        &nbsp;|&nbsp;
        <span>Cafe Photo by&nbsp;
          <a href="javascript:void(0)" onClick={() => this.handleClick('https://unsplash.com/@daanelise?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText')}>daan evers on Unsplash</a>
          </span>
        &nbsp;|&nbsp;
        Projects background coming soon!
        &nbsp;|&nbsp;
        <span>Logos from <a href='javascript:void(0)' onClick={() => this.handleClick('https://www.hiclipart.com/')}>hiclipart.com</a></span>
        <br/>
        <span>&copy; Lawson Hung | 2020</span>
      </div>
    )
  }

}

export default Credits