import React, { Fragment } from "react";

const Footer = (props) => {
  return (
    <Fragment>
      <div className="footer">
        <div className="footer-content">
          <span className="footer-text">If you love my work, </span>
          <span className="icon-container">
            <i className="far fa-heart"></i>
            <i className="far fa-heart shadow-icon"></i>
          </span>
          <span className="footer-text"> I love you.</span>
        </div>
        <button className="footer-btn">
          <span className="footer-text">freebie</span>
        </button>
      </div>
    </Fragment>
  );
};

export default Footer;
