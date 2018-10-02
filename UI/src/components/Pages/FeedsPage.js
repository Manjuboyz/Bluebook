import React from "react";
import "./FeedsPage.scss";

import SideMenu from "../Menu/SideMenu/SideMenu";
import Navbar from "../Navbar/Navbar";

class FeedsPage extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <React.Fragment>
      <Navbar />
      <span>Hi</span>
      <SideMenu name="qwe">
      <ul className="menulist">
        <li className="menuItem">
          <div><img src="" /></div><div>text here</div><div className="moveRight">&rarr;</div>
        </li>
        <li className="menuItem">
          <div><img src="" /></div><div>text here</div><div className="moveRight">&rarr;</div>
        </li>
        <li className="menuItem">
          <div><img src="" /></div><div>text here</div><div className="moveRight">&rarr;</div>
        </li>
        <li className="menuItem">
          <div><img src="" /></div><div>text here</div><div className="moveRight">&rarr;</div>
        </li>
      </ul>
      </SideMenu>
      </React.Fragment>
    );

  }
}

export default FeedsPage;
