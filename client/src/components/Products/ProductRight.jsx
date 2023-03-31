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
  onQuan,
  onCSize,
  addBag,
  feature,
  Favor,
  skus,
  quantity,
  onCQuan,
}) => {
  return (
    <div className="right">
      <ProductName main={main} rating={rating} />
      <ProductStyle
        main={main}
        show={show}
        style={style}
        Change={Change}
        onQuan={onQuan}
        onCSize={onCSize}
        onCQuan={onCQuan}
        skus={skus}
        quantity={quantity}
      />
      <ProductBag addBag={addBag} Favor={Favor} />
      <ProductFeature feature={feature} />
    </div>
  );
};

export default ProductRight;