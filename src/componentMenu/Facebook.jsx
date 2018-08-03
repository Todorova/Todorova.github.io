import React, {Component} from 'react';

import FacebookImage from '../styles/facebook.png';

class Facebook extends Component {
  constructor (props) {
    super (props);
    this.facebookClicked = this.facebookClicked.bind (this);
  }
  facebookClicked () {
    const url = 'https://www.facebook.com/ana.todorova.31';
    window.open (url);
  }

  render () {
    return (
      <img
        id="facebook"
        src={FacebookImage}
        alt="facebook"
        onClick={this.facebookClicked}
      />
    );
  }
}
export default Facebook;
