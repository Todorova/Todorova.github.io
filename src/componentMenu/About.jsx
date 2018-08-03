import React, {Component} from 'react';
import ProfilImage from '../styles/profil2.png'

class About extends Component{
constructor() {
        super();

    }

    render(){
        return(
         <div id='wrapper'>

            <img id='profilImg' src={ProfilImage} alt=""/>
            <h1>Ana Todorova</h1>
            <h2>Junior Front-end Developer</h2>

            <div id='textAbout'>
                <p>
                I am dynamic girl who has finished only half marathon but with ambition, desire and skill to finish the full marathon.
                </p>
                <p>
                I have already built good social skills and work ethics. I have always worked and loved to work in a team.
                </p>
                <p>In my free time, I like to learn new things, to be active and to do something different from the usual everyday
                life.
                </p>
            </div>

            <div id='contacts'>
                <ul>
                <li>email:
                <a href="">todorova@outlook.com</a>
                </li>
                <li>phone: +359 884 928 484</li>
                <li>skype: ana_todorova11</li>
                </ul>
            </div>

        </div>


        )
    }
}
export default About