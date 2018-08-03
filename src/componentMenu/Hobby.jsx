import React, {Component} from 'react';
import Cake from '../styles/hobby/Cake.png';
import Pancakes from '../styles/hobby/Pancakes.jpg';
import Eat from '../styles/hobby/Eat.jpg';
import Run from '../styles/hobby/Run.jpg';
import MoreRun from '../styles/hobby/MoreRun.jpg';
import Medal from '../styles/hobby/Medal.jpg';
import Relax from '../styles/hobby/Relax.png';
import Creative from '../styles/hobby/Creative.jpg';
import Slippers from '../styles/hobby/Slippers.png';
import DuckFace from '../styles/hobby/DuckFace.jpg';

class Hobby extends Component {
  constructor () {
    super ();
  }

  render () {
    return (

      (
        <div id="wrapper">
          <div className="hobby">
            <span>to be active...</span>
            <img src={Run} alt="run" />
            <img src={MoreRun} alt="run" />   
             <span>..not at all</span>   
            <img id = 'relax' src={Relax} alt="relax" />
           
          </div>

          <div className="hobby">
            <span>to make something delicious...</span>
            <img src={Cake} alt="cake" />
            <img src={Pancakes} alt="pancakes" />  <br/>
            <span>..and to eat</span> 
            <img src={Eat} alt="eat" />
          </div>

          <div className="hobby">
            <span>to make something creative...</span>
            <img src={Creative} alt="creative" />
            <img src={Slippers} alt="slippers" />
          </div>

          <div className='hobby'>
              <img src={DuckFace} /> <span>how to describe that..  </span>
            
          </div>
        </div>
      )
    );
  }
}
export default Hobby;
