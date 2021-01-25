import React from "react";
import "./TopHeader.css";

class TopHeader extends React.Component {
  render() {
    return (
      <div id="top-header-container">
        <div id="contact-container">
          <div id="top-header-email">
            <i className="fas fa-envelope"></i>
            {"info@scuudu.com"}
          </div>
          <div id="top-header-phone">
            <i className="fas fa-phone-alt"></i>
            {"+234 (0)812 3456 789 "}
          </div>
        </div>
        <div id="social-media-container">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    );
  }
}

export default TopHeader;