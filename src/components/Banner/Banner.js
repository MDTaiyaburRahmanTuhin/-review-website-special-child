import React from "react";
import MenuBar from "../MenuBar/MenuBar";

import "./Banner.css";


const Banner = () => {
  return (
    <div className="banner-container ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          <MenuBar></MenuBar>
          <div className="col-md-6">
            <h1 className="title">
              ADULT AND CHILDREN'S <br />COMMUNITY RESPITE
            </h1>
            <p className="text-white text-center mt-3">
              Our respite program offers individuals the opportunity to engage in activities outside of their typical routine, activities they may not usually have time for.This allows families time to focus on their own needs for the duration of the respite.
            </p>
            <button className="mt-3 about-btn">BECOME A MEMBER</button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
