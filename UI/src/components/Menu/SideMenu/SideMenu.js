import React from"react";
import "./SideMenu.css";

function SideMenu(props){
  return(
    <React.Fragment>
      <div className="fadeBackground" />
      <div className="sideMenuContainer">
        {props.children}
      </div>
    </React.Fragment>
  );
}

export default SideMenu;
