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
      <a href="#introSlide">A</a>
      <a href="#skillsSlide">B Skills</a>
      <a href="#resumeSlide">C</a>
      <a href="#contactSlide">D</a>
      </span>
    </nav>
  );
  }
}
