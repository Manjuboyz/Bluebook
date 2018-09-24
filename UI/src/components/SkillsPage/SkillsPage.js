import React from 'react';
import './SkillsPage.scss'

export default class SkillsPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
        <div id="skillsSlide">
          <div id="skillHeader"><div>Primary Skills</div></div>
          <div id="skillSupportingLine">
          I apply human factor principles to design products that are efficient, effective and satisfying at every touch point.
          My process starts with understanding business needs, listening to user stories, inventorying content and developing a UI Architecture for it.
          I use wireframes and low fidelity prototypes to test ideas for the front-end.
          <br/>
          With my rich technology skill set & the passion to learn more for self growth, I have worked with Architects, brainstorming over the possible alternative workflows & the available technologies in order to provide feasible solutions.
          </div>
          <div id="skillLists">
          <div>
            <span className="skillTopic">Web Deveopment Technologies</span>
            <ul>
            <li>React.JS</li>
            <li>Node.JS</li>
            <li>HTML5</li>
            <li>CSS/SASS/SCSS</li>
            <li>Bootstrap</li>
            <li>Material UI</li>
            <li> Sockets.io</li>
            </ul>
          </div>
          <div>
            <span className="skillTopic">Database & Servers</span>
            <ul>
            <li>SQL</li>
            <li>MySQL</li>
            <li>Redis</li>
            </ul>
          </div>
          <div>
            <span className="skillTopic">OS & Platforms</span>
            <ul>
            <li>RHEL 6</li>
            <li>Amazon Web Services (AWS) </li>
            <li>Ubuntu 14/16</li>
            <li>Windows 7/8/8.1/10</li>
            </ul>
          </div>
          <div>
            <span className="skillTopic">Version Control</span>
            <ul>
            <li>GitHub</li>
            </ul>
          </div>
          </div>
        </div>
      );
  }
}
