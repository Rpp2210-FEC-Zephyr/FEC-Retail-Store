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

const ProductName = ({ rating, main, setRating }) => {
  const getReviews = (id) => {
    $.ajax({
      type: "GET",
      url: "/reviews",
      data: {
        product_id: id, // NEED VARIABLE PRODUCT_ID
        count: 10,
        sort: "relevant",
      },
      success: (data) => {
        var sum = 0;
        for (var i = 0; i < data.results.length; i++) {
          sum += data.results[i].rating;
        }
        setRating(sum / data.results.length);
      },
    });
  };
  useEffect(() => {
    if (main.id != undefined) {
      getReviews(main.id);
    }
  }, [main]);
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
