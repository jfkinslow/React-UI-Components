import React from "react";
import "./Header.css";

export default class ImageThumbnail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <img
        className={this.props.className}
        src={this.props.src}
        alt={this.props.alt}
      />
    );
  }
}
