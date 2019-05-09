import React from "react";
import "./Header.css";

export default class HeaderTitle extends React.Component {
  render() {
    let children = this.props.children.split(" ");
    children = children.map((val, ind, arr) => {
      if (ind === 0) {
        return `${val} ${arr[ind + 1]}`;
      } else if (ind === 2) {
        return val;
      } else if (ind === 3) {
        return `${val} ${arr[ind + 1]}`;
      }
    });
    children = children.filter(function(el) {
      return el != null;
    });
    // children = children.join(' ');
    console.dir(children);
    return (
      <div className="header-title">
        <h4 className="header-title-h4">
          {children[0]}{" "}
          <span className="header-title-h4-grey">
            {children[1]} &middot; {children[2]}
          </span>
        </h4>
      </div>
    );
  }
}
