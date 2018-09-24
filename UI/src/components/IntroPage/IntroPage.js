import React from 'react';
import './IntroPage.scss'

export default class IntroPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
        <div id="introSlide">
          <div id="introContent">
            <div id="introName">Hello, I&apos;m Apurv Tiwari</div>
            <div id="brief">...<br/>
            I am a Full Stack Developer<br/>
            experienced in building web applications.<br/><br/>
            Really I&apos;m just a problem solver who cares <br/>
            about crafting products & experiences < br/>that are useful, useable, and beautiful.
            </div>
            <span>Scroll to continue &darr;</span>
          </div>
        </div>
      );
  }
}
