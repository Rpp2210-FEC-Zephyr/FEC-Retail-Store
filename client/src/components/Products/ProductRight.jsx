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
import ProductName from "./ProductName.jsx";
import ProductStyle from "./ProductStyle.jsx";
import ProductBag from "./ProductBag.jsx";
import ProductFeature from "./ProductFeature.jsx";
const Popup = require("../Notification.jsx");

const ProductRight = ({
  main,
  show,
  rating,
  style,
  Change,
  onCSize,
  addBag,
  Favor,
  skus,
}) => {
  return (
    <div className="right">
      <ProductName main={main} rating={rating} />
      <ProductStyle
        main={main}
        show={show}
        style={style}
        Change={Change}
        onCSize={onCSize}
        skus={skus}
      />
      <ProductBag addBag={addBag} Favor={Favor} />
      <ProductFeature main={main} />
    </div>
  );
};

export default ProductRight;
