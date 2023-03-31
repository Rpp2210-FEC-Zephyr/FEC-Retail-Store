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

const ProductStyle = ({
  main,
  show,
  style,
  Change,
  onQuan,
  onCSize,
  onCQuan,
  skus,
  quantity,
}) => {
  return (
    <div className="ProductNameC">
      <div className="price">
        {show.sale_price ? (
          <div className="priceC">
            <div className="PriceCross">${show.original_price}</div>
            <div className="PriceSale"> ${show.sale_price}</div>{" "}
          </div>
        ) : (
          <div>${show.original_price} </div>
        )}
      </div>

      <div className="style">
        STYLE > <div className="styleSelect"> {show ? show.name : null} </div>
      </div>

      <div className="StyleContainer">
        {style.length != 0
          ? style.results.map((item, index) => (
              <div
                onClick={(e) => {
                  Change(item, index);
                }}
                className="StyleChoose"
              >
                <div
                  className="selected"
                  id={index}
                  style={
                    index == 0
                      ? { visibility: "visible" }
                      : { visibility: "hidden" }
                  }
                >
                  <IconContext.Provider
                    value={{ color: "#40D3DC", size: "20px" }}
                  >
                    <AiFillCheckCircle />
                  </IconContext.Provider>
                </div>
                <div className="textBox">
                  <p className="text head">{item.name}</p>
                </div>
                <img src={item.photos[0].url} alt="" />
              </div>
            ))
          : null}
      </div>
      <div className="select">
        <select
          onChange={(e) => {
            onQuan(e.target.value);
            onCSize(e.target.value);
          }}
          className="SelectSize"
          id="Sizes"
        >
          <option defaultValue="selected">Choose Size</option>
          {skus.length != 0
            ? Object.keys(skus).map((size) => (
                <option value={`${skus[size].quantity} ${skus[size].size}`}>
                  {skus[size].size}{" "}
                </option>
              ))
            : null}
        </select>
        <select
          onChange={(e) => {
            onCQuan(e.target.value);
          }}
          className="SelectNumber"
          id="Number"
        >
          {quantity.length != 0 ? (
            quantity.map((num, index) => <option value={num}>{num} </option>)
          ) : (
            <option defaultValue="selected">OUT OF STOCK</option>
          )}
        </select>
      </div>
    </div>
  );
};

export default ProductStyle;