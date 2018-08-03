import React, {Component} from 'react';
import GithubImage from '../styles/github.png';

class Github extends Component {
  constructor (props) {
    super (props);
    this.githubClicked = this.githubClicked.bind (this);
  }
  githubClicked () {
    const url = 'https://github.com/Todorova';
    window.open (url);
  }

  render () {
    return <img id="github" src={GithubImage} alt="github"  onClick={this.githubClicked} />;
  }
}
export default Github;
