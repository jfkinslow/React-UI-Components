import React from "react";
import "./Header.css";
import HeaderTitle from "./HeaderTitle.js";
import HeaderBody from "./HeaderBody.js";

export default class HeaderContent extends React.Component {
  render() {
    return (
      <div className="header-content">
        <HeaderTitle>Lambda School @LambdaSchool 26 Jan</HeaderTitle>
        <HeaderBody>
          Let's learn React by building simple interfaces with components. Don't
          try to overthink it, just keep it simple and have fun. Once you feel
          comfortable using components you are well on your way to mastering
          React!
        </HeaderBody>
      </div>
    );
  }
}
