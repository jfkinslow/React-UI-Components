import React from "react";
import "./Header.css";

export default class HeaderBody extends React.Component {
  render() {
    return <p className="header-body">{this.props.children}</p>;
  }
}
