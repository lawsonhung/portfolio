import React, { Component } from 'react';
import './css/Credits.css';

class Credits extends Component {

  render() {
    return (
      <div className='credits'>
        <span>Photo by <a href="https://unsplash.com/@andyoneru?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Andyone on Unsplash</a></span>
        &nbsp;|&nbsp;
        {/* <span>New York City Photo by&nbsp;
          <a href='https://unsplash.com/@andreacau?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>Andrea Cau on Unsplash</a>
          </span> */}
        About background coming soon!
        &nbsp;|&nbsp;
        <span>Cafe Photo by&nbsp;
          <a href="https://unsplash.com/@daanelise?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">daan evers on Unsplash</a>
          </span>
        &nbsp;|&nbsp;
        <span>Logos from <a href='https://www.hiclipart.com/'>hiclipart.com</a></span>
        <br/>
        <span>&copy; Lawson Hung | 2020</span>
      </div>
    )
  }

}

export default Credits