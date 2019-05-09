import React from "react";
import "./Header.css";
import HeaderContent from "./HeaderContent.js";
import ImageThumbnail from "./ImageThumbnail.js";

export default class HeaderContainer extends React.Component {
  render() {
    return (
      <div className="card-header">
        <ImageThumbnail
          src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"
          alt="Avatar Image"
          className="avatar-image"
        />
        <HeaderContent />
      </div>
    );
  }
}
