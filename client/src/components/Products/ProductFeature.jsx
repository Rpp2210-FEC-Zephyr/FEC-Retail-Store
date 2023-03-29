import React, { useState, useEffect } from "react";
import { TbStarsFilled } from "react-icons/tb";
import { IoAddCircleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCheck2Square } from "react-icons/bs";
import { IconContext } from "react-icons";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import RatingSystem from "../RatingSystem.jsx";
import ReactDOM from "react-dom";
import $ from "jquery";

const Popup = require("../Notification.jsx");

const ProductFeature = ({ feature }) => {
  return (
    <div className="feature">
      <div className="vertical-divider"> ㅤ</div>

      <ul className="featurelist">
        {feature.length != 0
          ? feature.map((feat) => (
              <li className="featureitem">
                <BsCheck2Square /> ㅤ{feat.value}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default ProductFeature;
