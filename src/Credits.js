import React, { Component } from 'react';
import './css/Credits.css';

class Credits extends Component {

  render() {
    return (
      <div className='credits'>

        <span>
          Creative Flatlay Photo by&nbsp;
          <a href="https://unsplash.com/@andyoneru?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target='_blank' rel='noopener noreferrer'>
            Andyone on Unsplash
          </a>
        </span>

        &nbsp;|&nbsp;

        <span>
          Snow Forest Photo by&nbsp;
          <a href="https://unsplash.com/@anniespratt?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target='_blank' rel='noopener noreferrer'>
            Annie Spratt on Unsplash
          </a>
        </span>

        &nbsp;|&nbsp;

        <span>
          Cafe Photo by&nbsp;
          <a href="https://unsplash.com/@daanelise?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target='_blank' rel='noopener noreferrer'>
            daan evers on Unsplash
          </a>
        </span>

        &nbsp;|&nbsp;

        Wooden Planks Photo by&nbsp;
        <a href="https://www.pexels.com/photo/close-up-of-wooden-plank-326311/" target='_blank' rel='noopener noreferrer'>
          Pixabay on Pexels
        </a>

        <br/>

        <span>
          Logos from&nbsp;
          <a href='https://hiclipart.com/' target='_blank' rel='noopener noreferrer'>
            hiclipart.com
          </a>
        </span>

        <br/>

        <span>&copy; Lawson Hung | 2024</span>

      </div>
    )
  }

}

export default Credits