import React from "react";
import "./NavSub.css";
import seok from "../img/Seok.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";

class NavSub extends React.Component {
  render() {
    return (
      <ul className="sub_nav_item_container">
        <li>
          <button>
            <FontAwesomeIcon icon={faSearch} className="search" size="lg" />
          </button>
        </li>
        <li>
          <button>
            <FontAwesomeIcon icon={faBell} className="alert" size="lg" />
          </button>
        </li>
        <div className="user_img_container">
          <div className="user_img_border">
            <img src={seok} alt="user" />
          </div>
        </div>
      </ul>
    );
  }
}

export default NavSub;
