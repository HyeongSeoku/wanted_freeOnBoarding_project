import React from "react";
import "./NavMain.css";

class NavMain extends React.Component {
  render() {
    const navObj = [
      {
        key: 1,
        text: "탐색",
      },
      {
        key: 2,
        text: "커리어 성장",
      },
      {
        key: 3,
        text: "직군별 연봉",
      },
      {
        key: 4,
        text: "이력서",
      },
      {
        key: 5,
        text: "매치업",
      },
      {
        key: 6,
        text: "프리랜서",
      },
      {
        key: 7,
        text: "Ai 합격예측",
      },
    ];

    const onNaviClick = (target) => {
      console.log(target.target.innerText);
    };

    const listItems = navObj.map((navObj) => (
      <li className="nav_items" key={navObj.key} onClick={onNaviClick}>
        <span className="nav_items_text">{navObj.text}</span>
      </li>
    ));

    return <ul className="nav_item_container">{listItems}</ul>;
  }
}

export default NavMain;
