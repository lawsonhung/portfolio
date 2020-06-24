import React, { Component } from 'react';
import './css/Credits.css';

class Credits extends Component {

  render() {
    return (
      <div className='credits'>
        <span>Snowy Forest Photo by <a href='https://unsplash.com/@anniespratt?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>Annie Spratt on Unsplash</a></span>
        &nbsp;|&nbsp;
        <span>New York City Photo by <a href='https://unsplash.com/@andreacau?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>Andrea Cau on Unsplash</a></span>
        &nbsp;|&nbsp;
        <span>Logos from <a href='https://www.hiclipart.com/'>hiclipart.com</a></span>
        <br/>
        <span>&copy; Lawson Hung | 2020</span>
      </div>
    )
  }

}

export default Credits