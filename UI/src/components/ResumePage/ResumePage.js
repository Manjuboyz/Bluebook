import React from 'react';
import './ResumePage.scss'

export default class ResumePage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
        <div id="resumeSlide">
          <div id="resumeHeader"><div>Resume</div></div>

          <div id="resumeHistory">
            <div id="leftPane">
              <span className="infoHeader">Work</span>
              <ul>

              </ul>
            </div>
            <div id="rightPane">
              <span className="infoHeader">Education</span>
              <ul>

              </ul>
            </div>
          </div>
          <div id="wip"><br/><h1>Work In Progress...</h1><br/></div>
        </div>
      );
  }
}
