import React from "react";
import wanted_logo from "../img/wanted_logo.png";
import "./Home.css";
import NavMain from "./NavMain";
import NavSub from "./NavSub";

class Home extends React.Component {
  render() {
    return (
      <div className="main_container">
        <header className="nav_bar_container">
          <nav className="nav_bar">
            <div className="logo_box">
              <img src={wanted_logo} className="logo_img" alt="Logo" />
            </div>
            <NavMain />
            <NavSub />
          </nav>
        </header>
        <section className="main_contents_container"></section>
      </div>
    );
  }
}

export default Home;
