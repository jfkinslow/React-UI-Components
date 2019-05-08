import React from "react";
import "./Header.css";
import HeaderContent from "./HeaderContent.js";
import ImageThumbnail from "./ImageThumbnail.js";

export default class HeaderContainer extends React.Component {
  render() {
    return (
      <div className="card-header">
        <ImageThumbnail
          src="http://3.bp.blogspot.com/_rbeqbj-n1Z0/SQ9j6sjTeXI/AAAAAAAAAJk/o2US22AdaM4/s1600/usertile8.bmp"
          alt="Avatar Image"
          className="avatar-image"
        />
        <HeaderContent />
      </div>
    );
  }
}
