import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { HiOutlineX } from "react-icons/hi";
import { AiFillCheckCircle } from "react-icons/ai";
import $ from "jquery";
import RatingSystem from "./RatingSystem.jsx";

const YourOutfitsItem = ({ item, URL, Toggle }) => {
  useEffect(() => {
    console.log("THE ITEMS", item);
  }, [item]);

  return (
    <div class="RelatedItems">
      <div
        onClick={() => {
          Toggle(item);
        }}
        class="RELATEDxmark"
      >
        <IconContext.Provider value={{ color: "#40d3dc", size: "30px" }}>
          <HiOutlineX />
        </IconContext.Provider>
      </div>
      <div
        onClick={() => {
          URL(item.id);
        }}
        class="RCard"
      >
        <div class="RELATEIMG">
          <img
            class="RIMG"
            src={
              item
                ? item.photo
                : "http://cdn.onlinewebfonts.com/svg/img_471954.png"
            }
          />
        </div>

        <div class="RelatedCat">Category: {item.category}</div>
        <div>{item.name}</div>
        <div>${item.default_price} </div>
        <div class="RelateRATING">
          {item ? <RatingSystem obj={{ rating: item.reviews }} /> : null}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default YourOutfitsItem;
