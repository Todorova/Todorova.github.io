import React, {Component} from 'react';
import LinkedinImage from '../styles/linkedin.png';

class Linkedin extends Component {
  constructor (props) {
    super (props);
    this.linkedinClicked = this.linkedinClicked.bind (this);
  }
  linkedinClicked () {
    const url = 'https://www.linkedin.com/in/ana-todorova-08461543/';
    window.open (url);
  }

  render () {
    return (
      <img
        id="linkedin"
        src={LinkedinImage}
        alt="linkedin"
        onClick={this.linkedinClicked}
      />
    );
  }
}
export default Linkedin;
