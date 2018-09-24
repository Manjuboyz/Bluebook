import React from 'react';
import './ContactPage.scss'

export default class ContactPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
        <div id="contactSlide">
          <div id="contactHeader"><div>Contact</div></div>
          <div id="contactContainer">
            <div id="contactLinks">
              <a href="https://www.facebook.com/aptArtista/"><img src="https://sguru.org/wp-content/uploads/2018/02/facebook-logo-grey.png" alt="facebook.com" width="50"/></a>
              <a href="https://www.linkedin.com/in/aptdroid/"><img src="https://www.iconsdb.com/icons/preview/dim-gray/linkedin-3-xxl.png" alt="linkedin" width="50"/></a>
            </div>
            <div id="contactInfo">
              <label><span>&#9990;</span> +91 95352-49800</label>
              <br/>
              <label><span>&#9993;</span> apt.sharp@gmail.com</label>
            </div>
          </div>
        </div>
      );
  }
}
