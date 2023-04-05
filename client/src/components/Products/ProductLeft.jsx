import React, { useState, useEffect } from "react";
import { TbStarsFilled } from "react-icons/tb";
import { IoAddCircleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCheck2Square } from "react-icons/bs";
import { IconContext } from "react-icons";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import ReactDOM from "react-dom";
import $ from "jquery";

const Popup = require("../Notification.jsx");

const ProductLeft = ({ main, show, Scroll }) => {
  const ImageExpander = () => {
    setTimeout(() => {
      // Your logic here
      Popup.ImageExpander();
      Popup.Selected();

      ImageExpander();
    }, 1000);
  };

  useEffect(() => {
    if (main.id != undefined) {
      ImageExpander();
    }
  }, [main]);

  return (
    <div className="left">
      <div className="slider">
        <div class="vSlider">
          {show.length != 0
            ? show.photos.map((photo, index) => (
                <div
                  id={`scroll${index + 1}`}
                  onClick={() => {
                    Scroll(index + 1);
                  }}
                  className="vslide"
                >
                  <img src={photo.url} alt="" className="ScrollIMG" />
                </div>
              ))
            : null}
        </div>
        <div className="slides">
          {show.length != 0
            ? show.photos.map((photo, index) => (
                <input type="radio" name="radio-btn" id={`radio${index + 1}`} />
              ))
            : null}

          <div className="slide first">
            <img src={show.length != 0 ? show.photos[0].url : null} alt="" />
          </div>
          {/* show.photos.slice(1, 4) */}
          {show.length != 0
            ? show.photos.slice(1).map((photo) => (
                <div className="slide">
                  <img src={photo.url} alt="" className="ProductOverviewIMG" />
                </div>
              ))
            : null}

          <div className="Popup">
            <span>&times;</span>
          </div>

          <div className="navigation-auto">
            {show.length != 0
              ? show.photos.map((photo, index) => (
                  <div className={`auto-btn${index + 1}`}></div>
                ))
              : null}
          </div>
        </div>

        <div className="navigation-manual">
          {show.length != 0
            ? show.photos.map((photo, index) => (
                <label
                  key={`${photo} ${index}`}
                  onClick={() => {
                    Scroll(index + 1);
                  }}
                  htmlFor={`radio${index + 1}`}
                  className="manual-btn"
                ></label>
              ))
            : null}
        </div>
      </div>
      <div className="slogan">{main.slogan}</div>
      <div className="desc">{main.description}</div>
    </div>
  );
};

export default ProductLeft;
