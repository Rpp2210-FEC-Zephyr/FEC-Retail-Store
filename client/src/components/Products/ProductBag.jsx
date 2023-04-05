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

const ProductBag = ({ Favor, main, show, cSize, cQuant }) => {
  const addBag = () => {
    console.log("CSIXE QUANT", cSize, cQuant);
    if (cSize == null || cQuant == null) {
      Popup.Alert("error");
    } else {
      const bag = JSON.parse(localStorage.getItem("bag"));
      if (bag != null) {
        if (bag.length == 10) {
          Popup.Alert("warning");
        } else {
          Popup.Alert("success");
          localStorage.setItem(
            "bag",
            JSON.stringify([
              bag,
              { cloth: show, size: cSize, quant: cQuant, name: main.name },
            ]),
          );
        }
      } else {
        Popup.Alert("success");
        localStorage.setItem(
          "bag",
          JSON.stringify([
            { cloth: show, size: cSize, quant: cQuant, name: main.name },
          ]),
        );
      }
    }
  };
  return (
    <div className="Bag">
      <ul className="notifications"></ul>
      <div className="buttons">
        <button
          onClick={() => {
            addBag();
          }}
          className="Add buttons btn"
        >
          {" "}
          <div className="addComp">Add To Bag</div>
          <div className="icon">
            <IconContext.Provider value={{ color: "white", size: "40px" }}>
              <IoAddCircleOutline />
            </IconContext.Provider>
          </div>
        </button>
      </div>

      <input type="checkbox" id="star" />
      <label
        onClick={() => {
          Favor();
        }}
        className="label"
        id="info"
        htmlFor="star"
      >
        <svg viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
        </svg>
      </label>
    </div>
  );
};

export default ProductBag;
