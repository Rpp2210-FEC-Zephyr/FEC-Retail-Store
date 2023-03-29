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

const ProductName = ({ main, rating }) => {
  return (
    <div className="ProductNameC">
      <div className="productReview">
        {rating ? <RatingSystem obj={{ rating: rating }} /> : null}
        <div className="scroll">Show All Reviews</div>
      </div>
      <div className="category">{main ? main.category : null}</div>
      <div className="ProductName">{main ? main.name : null}</div>
    </div>
  );
};

export default ProductName;
