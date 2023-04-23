import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import { IconContext } from "react-icons";
import { BiDetail } from "react-icons/bi";

import RatingSystem from "./RatingSystem.jsx";

const RelatedItems = ({ item, URL }) => {
  const [image, setImage] = useState(null);
  const [rating, setRating] = useState(null);
  const getStyles = (id) => {
    $.ajax({
      type: "GET",
      url: "/Styles",
      data: { id: id },
      success: (data) => {
        setImage(data.results[0].photos[0].url);
      },
    });
  };

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
    getStyles(item.id);
    getReviews(item.id);
  }, []);

  return (
    <div className="RelatedItems">
      <div onClick={() => {}} class="RELATEDdetail">
        {" "}
        <IconContext.Provider value={{ color: "#40d3dc", size: "30px" }}>
          <BiDetail />
        </IconContext.Provider>
      </div>
      <div
        onClick={() => {
          URL(item.id);
        }}
        class="relatecard"
      >
        <div className="RELATEIMG">
          {" "}
          <img
            className="RIMG"
            src={
              image ? image : "http://cdn.onlinewebfonts.com/svg/img_471954.png"
            }
          />{" "}
        </div>
        <div className="RelatedCat"> Category: {item.category}</div>
        <div>{item.name}</div>
        <div>${item.default_price} </div>
        <div className="RelateRATING">
          {rating ? <RatingSystem obj={{ rating: rating }} /> : null}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default RelatedItems;
