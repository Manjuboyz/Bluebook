import React from 'react';
import './Navbar.scss';

export default class Navbar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (<nav>
      <span id="name"><a href="#introSlide">Apurv</a></span>
      <span id="navItems">
      <a href="#introSlide">Home</a>
      <a href="#skillsSlide">Technical Skills</a>
      <a href="#resumeSlide">Resume</a>
      <a href="#contactSlide">Contact</a>
      </span>
    </nav>
  );
  }
}
