import React from "react";
import "./css/Footer.css"
import codeLogo from "./code.svg";
import ghLogo from "./gh.svg";

function Footer() {
  return (
    <div className="footer">
            <div className="footer-content">
                <img className="imgSizer" src={codeLogo}></img>
                <a href="https://leetcode.com/emma_renren/">Leetcode profile</a>
                <span></span>
                 |
                <span></span>
                <img className="imgSizer" src={ghLogo}></img> 
                <a href="https://github.com/IrenJones/way-to-leetcode">Github project link</a>
            </div>
    </div>
  );
}

export default Footer;