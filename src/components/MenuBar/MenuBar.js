import React, { useContext } from "react";
import "./MenuBar.css";
import logo from "../..//images/logo/baller-logo-3.png";
import { Link } from "react-router-dom";
import { userContext } from "./../../App";

const MenuBar = () => {
  return (
    <div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="logo-img">
              <img className="w-75" src="https://icon2.cleanpng.com/20180419/cqq/kisspng-disability-child-wheelchair-back-to-school-learning-5ad8556ca55224.9742802215241270846772.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-10">
            <div className="menu-container ">
              <ul className="d-flex align-items-end justify-content-end">
                <Link to="/home" className="items">
                  <li>Home</li>
                </Link>
                <Link to="/about" className="items">
                  <li>about</li>
                </Link>
                <Link to="/serves" className="items">
                  <li>serves</li>
                </Link>
                <Link to="/community" className="items">
                  <li>Community Impact</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
